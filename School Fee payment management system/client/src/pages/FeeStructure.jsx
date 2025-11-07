import { useEffect, useState } from 'react'
import { listClasses, listFeeStructures, upsertFeeStructure, addExtraCharge } from '../services/fees'
import { apiClient } from '../services/api'
import Modal from '../components/Modal'
import { useI18n } from '../i18n.jsx'

export default function FeeStructure() {
  const { t } = useI18n()
  const [classes, setClasses] = useState([])
  const [structures, setStructures] = useState([])
  const [className, setClassName] = useState('')
  const [amount, setAmount] = useState('')
  const [extra, setExtra] = useState({ name: '', class: '', rollNumber: '', amount: '', date: '', time: '', reference: '' })
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState('')
  const [extraCharges, setExtraCharges] = useState([])
  const [editExtra, setEditExtra] = useState(null)
  const [editExtraForm, setEditExtraForm] = useState({ name: '', class: '', rollNumber: '', amount: '', date: '', time: '', reference: '' })
  const [deleteClassTarget, setDeleteClassTarget] = useState(null)
  const [deleteExtraTarget, setDeleteExtraTarget] = useState(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const [c, s, extrasRes] = await Promise.all([listClasses(), listFeeStructures(), apiClient.get('/studentExtraCharges')])
      setClasses(c)
      setStructures(s)
      setExtraCharges(extrasRes.data || [])
      setLoading(false)
    }
    load()
  }, [])

  async function saveClassFee(e) {
    e.preventDefault()
    setMsg('')
    if (!className || !amount) { setMsg('Class and amount are required'); return }
    // add class if not present
    const exists = classes.find(c => c.name === className)
    if (!exists) {
      await apiClient.post('/classes', { name: className })
      // refresh classes
      const fresh = await listClasses()
      setClasses(fresh)
    }
    const saved = await upsertFeeStructure(className, Number(amount))
    setStructures(prev => {
      const idx = prev.findIndex(x => x.className === saved.className)
      if (idx >= 0) { const copy = [...prev]; copy[idx] = saved; return copy }
      return [...prev, saved]
    })
    setMsg('Saved class fee')
  }

  async function saveExtra(e) {
    e.preventDefault()
    setMsg('')
    if (!extra.rollNumber || !extra.amount) { setMsg('Roll no and amount are required'); return }
    const payload = {
      studentId: extra.rollNumber, // treat roll no as unique key for extra tracking too
      name: extra.name,
      class: extra.class,
      rollNumber: extra.rollNumber,
      amount: Number(extra.amount),
      date: extra.date || new Date().toISOString().slice(0,10),
      time: extra.time || new Date().toTimeString().slice(0,5),
      reference: extra.reference || ''
    }
    const created = await addExtraCharge(payload)
    setExtraCharges(prev => [...prev, created])
    setExtra({ name: '', class: '', rollNumber: '', amount: '', date: '', time: '', reference: '' })
    setMsg('Saved student extra charge')
  }

  async function deleteClassAndFee(className) {
    setMsg('')
    // delete fee structure
    const fs = structures.find(s => s.className === className)
    if (fs) {
      await apiClient.delete(`/feeStructures/${fs.id}`)
      setStructures(prev => prev.filter(x => x.id !== fs.id))
    }
    // delete class
    const cls = classes.find(c => c.name === className)
    if (cls) {
      await apiClient.delete(`/classes/${cls.id}`)
      setClasses(prev => prev.filter(x => x.id !== cls.id))
    }
    setMsg('Deleted class and fee')
  }

  async function deleteExtraCharge(item) {
    await apiClient.delete(`/studentExtraCharges/${item.id}`)
    setExtraCharges(prev => prev.filter(x => x.id !== item.id))
  }

  async function saveEditExtra() {
    const updated = { ...editExtra, ...editExtraForm, amount: Number(editExtraForm.amount || 0) }
    const { data } = await apiClient.patch(`/studentExtraCharges/${editExtra.id}`, updated)
    setExtraCharges(prev => prev.map(x => x.id === data.id ? data : x))
    setEditExtra(null)
  }

  return (
    <div className="container">
      <h2>{t('feeStructure')}</h2>
      {loading ? 'Loading...' : (
        <>
          <div className="surface card" style={{ marginTop: 12 }}>
            <div className="section-title">{t('addClassFee')}</div>
            <form onSubmit={saveClassFee} className="form" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              <input placeholder={t('class') || 'Class Name'} value={className} onChange={(e) => setClassName(e.target.value)} />
              <input type="number" placeholder={t('amount') || 'Amount'} value={amount} onChange={(e) => setAmount(e.target.value)} />
              <button className="btn primary" type="submit">{t('save') || 'Save'}</button>
            </form>
          </div>

          <div className="surface card" style={{ marginTop: 16 }}>
            <div className="section-title">{t('currentExtraCharges')}</div>
            <form onSubmit={saveExtra} className="form" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
              <input placeholder={t('name') || 'Name'} value={extra.name} onChange={(e) => setExtra({ ...extra, name: e.target.value })} />
              <input placeholder={t('class') || 'Class'} value={extra.class} onChange={(e) => setExtra({ ...extra, class: e.target.value })} />
              <input placeholder={t('rollNo') || 'Roll No.'} value={extra.rollNumber} onChange={(e) => setExtra({ ...extra, rollNumber: e.target.value })} />
              <input type="date" value={extra.date} onChange={(e) => setExtra({ ...extra, date: e.target.value })} />
              <input type="time" value={extra.time} onChange={(e) => setExtra({ ...extra, time: e.target.value })} />
              <input placeholder={t('amount') || 'Amount'} type="number" value={extra.amount} onChange={(e) => setExtra({ ...extra, amount: e.target.value })} />
              <input placeholder={t('reference') || 'Reference'} style={{ gridColumn: 'span 5' }} value={extra.reference} onChange={(e) => setExtra({ ...extra, reference: e.target.value })} />
              <button className="btn" type="submit">{t('add') || 'Add Extra'}</button>
            </form>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>{t('currentStructure')}</div>
          <table className="table surface">
            <thead><tr><th>{t('class') || 'Class'}</th><th>{t('amount') || 'Amount'}</th><th>{t('actions') || 'Actions'}</th></tr></thead>
            <tbody>
              {structures.map(s => (
                <tr key={s.id}>
                  <td>{s.className}</td>
                  <td>₹{s.amount}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn" onClick={() => { setClassName(s.className); setAmount(String(s.amount)) }}>{t('edit')}</button>
                      <button className="btn danger" onClick={() => setDeleteClassTarget(s.className)}>{t('delete')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="section-title" style={{ marginTop: 16 }}>{t('currentExtraCharges')}</div>
          <table className="table surface">
            <thead><tr><th>{t('name') || 'Name'}</th><th>{t('class') || 'Class'}</th><th>{t('rollNo') || 'Roll'}</th><th>{t('amount') || 'Amount'}</th><th>{t('date') || 'Date'}</th><th>{t('time') || 'Time'}</th><th>{t('reference') || 'Reference'}</th><th>{t('actions') || 'Actions'}</th></tr></thead>
            <tbody>
              {extraCharges.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.class}</td>
                  <td>{item.rollNumber}</td>
                  <td>₹{item.amount}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.reference}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn" onClick={() => { setEditExtra(item); setEditExtraForm({ name: item.name, class: item.class, rollNumber: item.rollNumber, amount: item.amount, date: item.date, time: item.time, reference: item.reference }) }}>{t('edit')}</button>
                      <button className="btn danger" onClick={() => setDeleteExtraTarget(item)}>{t('delete')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {msg && <div style={{ marginTop: 8, color: 'var(--success)' }}>{msg}</div>}
          <Modal open={Boolean(editExtra)} title={t('edit') || 'Edit Extra Charge'} onClose={() => setEditExtra(null)} footer={<>
            <button className="btn" onClick={() => setEditExtra(null)}>{t('cancel') || 'Cancel'}</button>
            <button className="btn primary" onClick={saveEditExtra}>{t('save') || 'Save'}</button>
          </>}>
            <div className="form">
              <input placeholder={t('name') || 'Name'} value={editExtraForm.name || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, name: e.target.value })} />
              <input placeholder={t('class') || 'Class'} value={editExtraForm.class || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, class: e.target.value })} />
              <input placeholder={t('rollNo') || 'Roll No.'} value={editExtraForm.rollNumber || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, rollNumber: e.target.value })} />
              <input type="date" value={editExtraForm.date || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, date: e.target.value })} />
              <input type="time" value={editExtraForm.time || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, time: e.target.value })} />
              <input type="number" placeholder={t('amount') || 'Amount'} value={editExtraForm.amount || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, amount: e.target.value })} />
              <input placeholder={t('reference') || 'Reference'} value={editExtraForm.reference || ''} onChange={(e) => setEditExtraForm({ ...editExtraForm, reference: e.target.value })} />
            </div>
          </Modal>

          {/* Delete Class modal */}
          <Modal
            open={Boolean(deleteClassTarget)}
            title={t('delete') || 'Delete'}
            onClose={() => setDeleteClassTarget(null)}
            footer={<>
              <button className="btn" onClick={() => setDeleteClassTarget(null)}>{t('cancel') || 'Cancel'}</button>
              <button className="btn danger" onClick={async () => { await deleteClassAndFee(deleteClassTarget); setDeleteClassTarget(null) }}>{t('delete') || 'Delete'}</button>
            </>}
          >
            <div>{(t('confirmDelete') || 'Are you sure you want to delete')} <strong>{deleteClassTarget}</strong>?</div>
          </Modal>

          {/* Delete Extra modal */}
          <Modal
            open={Boolean(deleteExtraTarget)}
            title={t('delete') || 'Delete'}
            onClose={() => setDeleteExtraTarget(null)}
            footer={<>
              <button className="btn" onClick={() => setDeleteExtraTarget(null)}>{t('cancel') || 'Cancel'}</button>
              <button className="btn danger" onClick={async () => { await deleteExtraCharge(deleteExtraTarget); setDeleteExtraTarget(null) }}>{t('delete') || 'Delete'}</button>
            </>}
          >
            <div>{(t('confirmDelete') || 'Are you sure you want to delete')} <strong>{deleteExtraTarget?.name}</strong>?</div>
          </Modal>
        </>
      )}
    </div>
  )
}



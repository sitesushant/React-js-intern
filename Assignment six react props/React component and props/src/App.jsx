import { useState } from 'react'
import { Input, Button } from './components'

export default function App() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [submittedData, setSubmittedData] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    setSubmittedData(formData)
    console.log('Data lifted from child to parent:', formData)
  }

  const handleReset = () => {
    setFormData({ email: '', message: '' })
    setSubmittedData(null)
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>React Component and Props</h1>

      <div style={{ display: 'grid', gap: 16, maxWidth: 420 }}>
        <Input 
          label="Email" 
          placeholder="Enter your email" 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <Input 
          label="Message" 
          placeholder="Enter your message" 
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />

        <div style={{ display: 'flex', gap: 12 }}>
          <Button 
            variant="primary" 
            buttonText="Submit" 
            onClick={handleSubmit}
          />
          <Button 
            variant="secondary" 
            buttonText="Reset" 
            onClick={handleReset}
          />
        </div>

        {submittedData && (
          <div style={{ 
            padding: 16, 
            backgroundColor: '#f0f9ff', 
            border: '1px solid #0ea5e9', 
            borderRadius: 8,
            marginTop: 16 
          }}>
            <h3>Data Lifted from Child to Parent:</h3>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}



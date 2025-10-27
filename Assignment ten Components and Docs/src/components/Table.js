import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
} from '@chakra-ui/react';

/**
 * CustomTable Component
 * A customizable table component with sorting and styling options
 * 
 * @param {Object} props - Component props
 * @param {Array} props.columns - Array of column definitions {key, label, sortable, render}
 * @param {Array} props.data - Array of data objects
 * @param {string} props.caption - Table caption
 * @param {string} props.variant - Table variant ('simple', 'striped', 'unstyled')
 * @param {string} props.colorScheme - Color scheme for striped variant
 * @param {string} props.size - Table size ('sm', 'md', 'lg')
 * @param {boolean} props.isSortable - Enable sorting functionality
 * @param {function} props.onSort - Sort handler function
 * @param {Object} props.tableProps - Additional props for the Table component
 */
const CustomTable = ({
  columns = [],
  data = [],
  caption,
  variant = 'simple',
  colorScheme = 'gray',
  size = 'md',
  isSortable = false,
  onSort,
  tableProps = {},
  ...props
}) => {
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    if (!isSortable) return;
    
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
    
    if (onSort) {
      onSort(key, direction);
    }
  };

  const getSortIcon = (columnKey) => {
    if (!isSortable || sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <TableContainer {...props}>
      <Table variant={variant} colorScheme={colorScheme} size={size} {...tableProps}>
        {caption && <TableCaption placement="top">{caption}</TableCaption>}
        
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th
                key={column.key}
                onClick={() => column.sortable !== false && handleSort(column.key)}
                cursor={column.sortable !== false && isSortable ? 'pointer' : 'default'}
                _hover={column.sortable !== false && isSortable ? { bg: 'gray.100' } : {}}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Text>{column.label}</Text>
                  {getSortIcon(column.key)}
                </Box>
              </Th>
            ))}
          </Tr>
        </Thead>
        
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((column) => (
                <Td key={column.key}>
                  {column.render
                    ? column.render(row[column.key], row, rowIndex)
                    : row[column.key]
                  }
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

/**
 * SimpleTable Component
 * A simplified table component for basic data display
 * 
 * @param {Object} props - Component props
 * @param {Array} props.headers - Array of header strings
 * @param {Array} props.rows - Array of row data arrays
 * @param {string} props.caption - Table caption
 * @param {string} props.variant - Table variant
 * @param {string} props.colorScheme - Color scheme
 * @param {string} props.size - Table size
 */
const SimpleTable = ({
  headers = [],
  rows = [],
  caption,
  variant = 'simple',
  colorScheme = 'gray',
  size = 'md',
  ...props
}) => {
  const columns = headers.map((header, index) => ({
    key: `col_${index}`,
    label: header,
  }));

  const data = rows.map((row, rowIndex) => {
    const rowData = {};
    headers.forEach((header, colIndex) => {
      rowData[`col_${colIndex}`] = row[colIndex];
    });
    return rowData;
  });

  return (
    <CustomTable
      columns={columns}
      data={data}
      caption={caption}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      {...props}
    />
  );
};

export { CustomTable as Table, SimpleTable };
export default CustomTable;

const sortTableData = (array, { sortBy, direction }) => {
    return array.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return direction === 'ascending' ? -1 : 1
      if (a[sortBy] > b[sortBy]) return direction === 'ascending' ? 1 : -1
      return 0
    })
  }

export default sortTableData
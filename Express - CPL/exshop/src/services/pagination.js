// Function
// getPagination
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return {
    limit,
    offset
  };
};

// getPaggingData
const getPaggingData = (result, page, limit) => {
  const {
    count: totalItems,
    rows: data
  } = result;
  const currentPage = page ? +page + 1 : 0;
  const totalPage = Math.ceil(totalItems / limit);

  return {
    totalItems,
    currentPage,
    totalPage,
    data
  }
}

// Exports
module.exports = {
  getPagination,
  getPaggingData
};
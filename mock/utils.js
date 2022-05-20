function toResponse(data = [], success = true, msg = '', code = 200) {
  return {
    code,
    data,
    msg,
    success
  }
}

export {
  toResponse
}

function toResponse(data = [], success = true, msg = '', code = 200) {
  return {
    code,
    data,
    msg,
    success
  }
}

function formatRequest(data) {
  const newBody = data
  if (newBody.body) {
    try {
      newBody.body = JSON.parse(newBody.body)
    } catch (e) {}
  }
  return newBody
}

export { toResponse, formatRequest }

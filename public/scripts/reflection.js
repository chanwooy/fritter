function viewAllReflections(fields) {
    fetch('/api/reflections')
      .then(showResponse)
      .catch(showResponse);
  }
  
  function viewReflectionsByAuthor(fields) {
    fetch(`/api/reflections?author=${fields.author}`)
      .then(showResponse)
      .catch(showResponse);
  }
  
  function createReflection(fields) {
    fetch('/api/reflections', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function editReflection(fields) {
    fetch(`/api/reflections/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function deleteReflection(fields) {
    fetch(`/api/reflections/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }
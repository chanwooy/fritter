function likeFreet(fields) {
    fetch(`/api/controversies/like/${fields.id}`, {method: 'PUT'})
      .then(showResponse)
      .catch(showResponse);
}

function dislikeFreet(fields) {
    fetch(`/api/controversies/dislike/${fields.id}`, {method: 'PUT'})
      .then(showResponse)
      .catch(showResponse);
}


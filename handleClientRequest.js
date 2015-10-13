function handleClientRequest(req) {
  makeDBCall(req.someIfo, function(result) {
    req.complete(res);
  });
}

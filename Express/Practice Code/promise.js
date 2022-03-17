var aPromise = new Promise(function(resolve, reject) {
	req.get(options, function(err, resp, body) {
		if (err) {
			reject(err);
		} else {
			resolve(JSON.parse(body));
		}
	})
});

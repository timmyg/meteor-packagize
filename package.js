Package.describe({
  summary: "SUMMARY OF YOUR PROJECT HERE."
});

// this pulls in js and css files to be used
// you can make them available to client, server, or both (as shown below)
Package.on_use(function(api) {
  api.add_files('jquery.flexslider-min.js', ['client', 'server']);
  api.add_files('flexslider.css', ['client', 'server']);
});
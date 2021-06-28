var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://ekd1oy5w6d.execute-api.us-east-1.amazonaws.com/dev/demo-resource');
xhr.onreadystatechange = function(event) {
  console.log(event.target);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({name:"meera", age:25}));
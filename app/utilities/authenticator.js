import toggleAuth from 'j-toker'

toggleAuth.configure({
  apiUrl: 'http://localhost:3000/api/v1'
});

toggleAuth.emailSignUp({
  first_name: 'jens',
  last_name: 'debergh',
  email: 'test@test2132131csdasdas.com',
  password: 'test',
  password_confirmation: 'test',
}).then(function(user) {
  console.log(user);
}).fail(function(resp) {
  console.log(resp)
});

window.authentication = toggleAuth;

export default toggleAuth;

$(document).ready(function() {
    const endpoint = `https://api.github.com/users/adrianohq`;

    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        const avatar = json.avatar_url;
        const name = json.name;
        const username = json.login;
        const repository = json.public_repos;
        const followers = json.followers;
        const following = json.following;
        const link = json.html_url;

        $('#avatar').attr('src', avatar);
        $('#name').text(name);
        $('#username').text(username);
        $('#repository').text(repository);
        $('#followers').text(followers);
        $('#following').text(following);
        $('#link').attr('href', link);
    })
    .catch(function(error) {
        alert('Erro ao recuperar os dados do perfil');
    })

})
const mensagem = "Você passou no teste do console";
const posts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(err => console.log(err));
}
        
document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('sem conexão');
            }
            return response.json();
        })
        .then(data => {
            // Limpa o container de dados
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = '';

            // Cria elementos para cada item dos dados
            data.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';

                const title = document.createElement('h2');
                title.appendChild(document.createTextNode(post.title));

                const body = document.createElement('p');
                body.appendChild(document.createTextNode(post.body));

                postDiv.appendChild(title);
                postDiv.appendChild(body);

                dataContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('deu ruim', error);
        });
});
export {mensagem, posts};
const http = require('http');
const fs = require('fs');

// Criar o servidor HTTP
const server = http.createServer((req, res) => {
    if (req.url === '/sse') {
        // Configurar a resposta como EventStream
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Simular um evento SSE quando o usuário se loga
        const loginEvent = "data: Usuário se logou com sucesso\n\n";
        res.write(loginEvent);

        // Mantenha a conexão aberta indefinidamente
        setInterval(() => {
            const updateEvent = "data: Atualização periódica\n\n";
            res.write(updateEvent);
        }, 5000);
    } else {
        // Outras rotas podem ser tratadas aqui
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('index.html'));
    }
});

// Iniciar o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor SSE em execução na porta 3000');
});

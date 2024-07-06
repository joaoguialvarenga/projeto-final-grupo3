const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configure CORS middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/hamburgueres', (_req, res) => {
    res.json([
        {
            nome: "HMM BOM DEMAIS",
            ingredientes: ["Pão especial da casa", "smash burger", "muçarela", "ovo", "bacon", "tomate", "milho verde", "batata palha", "maionese especial"],
            preco: 30.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202309141741_1HY3_i.jpg"
        },
        {
            nome: "HMM PICLES",
            ingredientes: ["Pão especial da casa", "smash burger", "queijo cheddar", "bacon", "picles", "maionese especial"],
            preco: 26.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202309111806_GFJI_i.jpg"
        },
        {
            nome: "HMM CEBOLA",
            ingredientes: ["Pão especial da casa", "smash burger", "Catupiry Original", "bacon crocante", "anéis de cebola", "maionese especial"],
            preco: 29.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202107261626_6M71_i.jpg"
        },
        {
            nome: "HMM FRANGO BARBECUE",
            ingredientes: ["Pão especial da casa", "tiras de filé de frango empanadas", "queijo cheddar", "molho barbecue", "maionese especial"],
            preco: 29.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202107261646_1J84_i.jpg"
        },
        {
            nome: "HMM BURGER",
            ingredientes: ["Pão especial da casa", "smash burger", "queijo cheddar", "maionese especial"],
            preco: 21.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202107261618_BY70_i.jpg"
        },
        {
            nome: "HMM BACON",
            ingredientes: ["Pão especial da casa", "smash burger", "queijo cheddar", "bacon", "maionese especial"],
            preco: 24.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202107261620_JT76_i.jpg"
        },
        {
            nome: "HMM BARBECUE",
            ingredientes: ["Pão especial da casa", "smash burger", "queijo cheddar", "bacon", "maionese especial", "molho barbecue"],
            preco: 26.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202107261613_C7SG_i.jpg"
        },
        {
            nome: "HMM SALADA",
            ingredientes: ["Pão especial da casa", "smash burger", "queijo cheddar", "alface", "cebola roxa", "tomate", "maionese especial"],
            preco: 24.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202309141653_WYH1_i.jpg"
        },
        {
            nome: "HMM PIMENTA",
            ingredientes: ["Pão especial da casa", "smash burger", "queijo cheddar", "bacon crocante", "pimenta caramelizada", "maionese especial"],
            preco: 28.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202107261610_1PLP_i.jpg"
        },
        {
            nome: "HMM VEGANO",
            ingredientes: ["Pão vegano selado no azeite", "hambúrguer vegano de grão de bico com brócolis (150g)", "rúcula", "tomate grape", "molho pesto vegano"],
            preco: 32.00,
            imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab283dde-9502-43cf-bd94-55ac5af3eea1/202108022201_0A6F_i.jpg"
        }
    ]);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
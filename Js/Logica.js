const produtos = [
    {
        nome: "m10 fones de ouvido sem fio bluetooth",
        preco: "de R$60,00 por R$22,90",
        imagem: "fotos/foto3.png",
        link: "https://s.shopee.com.br/4L8cX4EwrS",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Relógio luxuoso",
        preco: "de R$80,00 por R$20,50",
        imagem: "fotos/relógio.png",
        link: "https://s.shopee.com.br/BJ3aNWyM1",
        loja: "shopee",
        categoria: "acessorios"
    },
    {
        nome: "Camiseta Longline Masculina",
        preco: "R$19,90",
        imagem: "fotos/camiseta.png",
        link: "https://s.shopee.com.br/7V5eKYUrEO",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Limpador Pincel Maquiagem Elétrico",
        preco: "R$29,99",
        imagem: "fotos/limpador.png",
        link: "https://s.shopee.com.br/1qRHaX2jXL",
        loja: "shopee",
        categoria: "beleza"
    },
    {
        nome: "Kit 2 body feminino suplex manga longa duplo premium",
        preco: "R$34,90-R$74,90",
        imagem: "fotos/body.jpg",
        link: "https://s.shopee.com.br/AUjHg7mK9m",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Kit de Organizador Multiuso Plasutil Geladeira dispensa",
        preco: "R$24,90-R$73,90",
        imagem: "fotos/organizadorr.jpg",
        link: "https://s.shopee.com.br/4q4uvx6ElX",
        loja: "shopee",
        categoria: "decoracao"
    },
    {
        nome: "Camiseta Masculina de manga longa estilo moda fina",
        preco: "R$61,95",
        imagem: "fotos/m-3xl.jpg",
        link: "https://s.shopee.com.br/2B49lSF5cj",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "s10 fones de ouvido bluetooth mãos livres estereo a prova d'água",
        preco: "R$6,38",
        imagem: "fotos/s10_fones.jpg",
        link: "https://s.shopee.com.br/7KmFvBqBc7",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Kit 3 garrafas térmicas de inox com adesivos",
        preco: "R$27,99-R$31,99",
        imagem: "fotos/garrafa.jpg",
        link: "https://s.shopee.com.br/40VnxMcmFO",
        loja: "shopee",
        categoria: "decoracao"
    },
    {
        nome: "caixa de som JBI go3 caixinha de som caixa de som portátil Bluetooth",
        preco: "R$37,90",
        imagem: "fotos/jbl.jpg",
        link: "https://s.shopee.com.br/3Awh4g7UK8",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Camiseta Overside Texturizada",
        preco: "R$44,99",
        imagem: "fotos/ov.jpg",
        link: "https://s.shopee.com.br/5fe4kEeRJm",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Camiseta T-shirt Unisex",
        preco: "R$49,90",
        imagem: "fotos/TS.jpg",
        link: "https://s.shopee.com.br/AUjKVNtArF",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "KIT 2 mini IP camêra wi-fi sem fio",
        preco: "R$53,90",
        imagem: "fotos/IP.jpg",
        link: "https://s.shopee.com.br/9UqnJmvK0o",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "short alfaitaria com  detalhes  de elastico",
        preco: "R$44,31",
        imagem: "fotos/alfaitaria.jpg",
        link: "https://onelink.shein.com/15/4vt9jqjhm51l",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Mini Cuscuzeira Porção Individual Em Alumínio Polido",
        preco: "R$24,49",
        imagem: "fotos/mini.png",
        link: "https://onelink.shein.com/15/4vt9kzx77eix",
        loja: "shein",
        categoria: "decoracao"
    },
    {
        nome: "Conjunto Imperdível de Camiseta 100% algodão manga curta e Shorts Tactel",
        preco: "R$35,93",
        imagem: "fotos/conjuntos.png",
        link: "https://onelink.shein.com/15/4vta8mbio8pj",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Kit Quadro Decorativo Vazado Amor Fé Gratidão 3 peças",
        preco: "R$9,35",
        imagem: "fotos/quadro.png",
        link: "https://onelink.shein.com/15/4vt9o8c1cwel",
        loja: "shein",
        categoria: "decoracao"
    },
    {
        nome: "Suportes Prateleiras Organizador de Cozinha/Banheiro/Quarto",
        preco: "R$12,96",
        imagem: "fotos/suporte.png",
        link: "https://onelink.shein.com/15/4vt9pdro7sig",
        loja: "shein",
        categoria: "decoracao"
    },
    {
        nome: "2 peças Strass Folha Design Brinco & 1 peça Punho de orelha",
        preco: "R$R$11,39",
        imagem: "fotos/brinco.png",
        link: "https://onelink.shein.com/15/4vvubzy4blzx",
        loja: "shein",
        categoria: "acessorios"
    },
    {
        nome: "Conjunto de 1 Elegante Pulseira e Bracelete em Formato de Trevo",
        preco: "R$17,09",
        imagem: "fotos/br.png",
        link: "https://onelink.shein.com/15/4vvudd9vht0f",
        loja: "shein",
        categoria: "acessorios"
    },
    {
        nome: "1 Conjunto de um anel aberto com pedra olho de gato em formato de folha, elegante e luxuoso",
        preco: "R$14,55",
        imagem: "fotos/anel.png",
        link: "https://onelink.shein.com/15/4vvuf8cwsphd",
        loja: "shein",
        categoria: "acessorios"
    },
    {
        nome: "5 Peças/Conjunto Grampos de Cabelo Garra de Cabelo Acessórios de Cabelo da Moda para Parte Traseira da Cabeça, Grampos de Beleza",
        preco: "R$27,12",
        imagem: "fotos/grampo.png",
        link: "https://onelink.shein.com/15/4vvufzzdbw2g",
        loja: "shein",
        categoria: "acessorios"
    },
    {
        nome: "2 peças/Conjunto Relógios de Pulso Femininos de Quartzo Moda Casual com Mostrador Pequeno e Pulseira de Couro",
        preco: "R$21,79",
        imagem: "fotos/RF.png",
        link: "https://onelink.shein.com/15/4vvuh7e0vdx7",
        loja: "shein",
        categoria: "acessorios"
    },
    {
        nome: "Calça Pantalona Alfaiataria Com Cinto Tendencia Outono Primavera 2025",
        preco: "R$26,97",
        imagem: "fotos/pantolona.png",
        link: "https://onelink.shein.com/15/4vvumwl93cp1",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Moletom Canguru Liso Masculino e Feminino Casaco Flanelado Grosso Blusa de Frio Inverno Dia dos Pais",
        preco: "R$39,90",
        imagem: "fotos/canguru.png",
        link: "https://onelink.shein.com/15/4vvuoxlex9gi",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Kit 3 Blusas Regata feminina manga Nula canelada Mula Manca premium",
        preco: "R$36,81",
        imagem: "fotos/k3.png",
        link: "https://onelink.shein.com/15/4vvupr6vc93o",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Short Saia Com Fivela Orgânica Neoprene Tendecia Short saia com Pinsa Dourada na frente Short saia franja",
        preco: "R$31,99",
        imagem: "fotos/shortsaia.png",
        link: "https://onelink.shein.com/15/4vvuspqjp1qw",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Fone de Ouvido Bluetooth P9 - Design Elegante com Microfone Sem Fio",
        preco: "R$29,76",
        imagem: "fotos/P9.png",
        link: "https://onelink.shein.com/15/4vvuvef0zhn3",
        loja: "shein",
        categoria: "tecnologia"
    },
    {
        nome: "Caixa de Som c/ 2 Microfones Mini karaoke k12 Auto Falante sem Fio Bluetooth Luzes Led Brincadeiras e Diversão para toda Família.",
        preco: "R$40,99",
        imagem: "fotos/C2.png",
        link: "https://onelink.shein.com/15/4vvuw9zjsw01",
        loja: "shein",
        categoria: "tecnologia"
    },
    {
        nome: "Creatina Monohidratada 500g",
        preco: "R$59,90",
        imagem: "ML/creatina.webp",
        link: "https://mercadolivre.com/sec/2GxCZAD",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "Kit Meias Puma 9 Pares",
        preco: "R$64,89",
        imagem: "ML/meia.png",
        link: "https://mercadolivre.com/sec/32JT5hR",
        loja: "ml",
        categoria: "roupas"
    },
    {
        nome: "Nutri Whey Protein 900g",
        preco: "R$51,29",
        imagem: "ML/protein.png",
        link: "https://mercadolivre.com/sec/2Fys4Ny",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "Jaqueta de Couro Masculina",
        preco: "R$169,31",
        imagem: "ML/jaqueta.png",
        link: "https://mercadolivre.com/sec/1oJQvRQ",
        loja: "ml",
        categoria: "roupas"
    },
    {
        nome: "Kit 3 Calças Legging Feminina",
        preco: "R$49,79",
        imagem: "ML/leg.png",
        link: "https://mercadolivre.com/sec/2vWLBpo",
        loja: "ml",
        categoria: "roupas"
    },
    {
        nome: "Gel De Limpeza Facial Effaclar 300g La Roche Posay",
        preco: "R$76,90",
        imagem: "ML/gel.png",
        link: "https://mercadolivre.com/sec/1165hxP",
        loja: "ml",
        categoria: "beleza"
    },
    {
        nome: "PROHIBIDO PRÉ TREINO 360g - Sabor: Maça Verde - A Combinação Perfeita de 8 Ingredientes que proporcionam energia do início ao fim do seu Treino",
        preco: "R$74,50",
        imagem: "ML/pre.png",
        link: "https://mercadolivre.com/sec/34aqorY",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "Corrente Cordão Colar Masculino Grumet Em Aço Inox Prata Cor Prateado",
        preco: "R$22,90",
        imagem: "ML/prata.png",
        link: "https://mercadolivre.com/sec/2iJXr7Z",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Kit de maquiagem",
        preco: "R$ 49,99",
        imagem: "Shein/Maquiagem-kit.png",
        link: "https://br.shein.com/SHEGLAM-Kit-de-Maquiagem-Completo-com-9-Pcs-p-15655761-cat-4328.html",
        loja: "shein",
        categoria: "beleza"
    },
    {
        nome: "Vestido midi liso",
        preco: "R$ 89,90",
        imagem: "Shein/Vestido-midi.png",
        link: "https://br.shein.com/Vestido-de-manga-borboleta-s%C3%B3lida-p-10659615-cat-1727.html",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "Garrafa de água com marcador de tempo",
        preco: "R$ 35,50",
        imagem: "Shein/garrafa.png",
        link: "https://br.shein.com/Garrafa-de-%C3%A1gua-com-marcador-de-tempo-p-10905437-cat-2453.html",
        loja: "shein",
        categoria: "acessorios"
    },
    {
        nome: "Copo Térmico Stanley Classic",
        preco: "R$ 150,00",
        imagem: "ML/Stanley.png",
        link: "https://mercadolivre.com/sec/24vD4yT",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Tênis casual de couro",
        preco: "R$ 120,00",
        imagem: "Shein/Tenis.png",
        link: "https://br.shein.com/Homens-T%C3%AAnis-s%C3%B3lido-simples-p-11145625-cat-1985.html",
        loja: "shein",
        categoria: "roupas"
    },
    {
        nome: "kit de pincéis de maquiagem",
        preco: "R$ 29,99",
        imagem: "Shein/Pinceis.png",
        link: "https://br.shein.com/15pcs-Conjunto-de-pincel-de-maquiagem-de-fibra-p-9943640-cat-2342.html",
        loja: "shein",
        categoria: "beleza"
    },
    {
        nome: "kit com 5 relógios masculino",
        preco: "R$ 49,90",
        imagem: "shopee/relogio.png",
        link: "https://s.shopee.com.br/1090XQ2l3B",
        loja: "shopee",
        categoria: "acessorios"
    },
    {
        nome: "Luminária de led",
        preco: "R$ 15,00",
        imagem: "shopee/luminaria.png",
        link: "https://s.shopee.com.br/9pSgY7jC52",
        loja: "shopee",
        categoria: "decoracao"
    },
    {
        nome: "Creatina",
        preco: "R$ 79,90",
        imagem: "ML/creatina.png",
        link: "https://mercadolivre.com/sec/2L5m2Q5",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "kit 100 velas",
        preco: "R$ 24,90",
        imagem: "ML/velas.png",
        link: "https://mercadolivre.com/sec/2eFp3b5",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "kit 40 velas",
        preco: "R$ 15,00",
        imagem: "ML/vela2.png",
        link: "https://mercadolivre.com/sec/24b6f4g",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Fita de led usb 5m",
        preco: "R$ 19,90",
        imagem: "shopee/fita-de-led.png",
        link: "https://s.shopee.com.br/6fK9F1bY9o",
        loja: "shopee",
        categoria: "decoracao"
    },
    {
        nome: "Kit 4 Potes Herméticos",
        preco: "R$ 49,90",
        imagem: "ML/pote-hermetico.png",
        link: "https://mercadolivre.com/sec/2B1u82d",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Mini processador de alimentos",
        preco: "R$ 25,00",
        imagem: "shopee/mini-processador.png",
        link: "https://s.shopee.com.br/2f5t4ZqD2W",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Mixer e mini liquidificador portátil",
        preco: "R$ 22,00",
        imagem: "shopee/mini-liquidificador.png",
        link: "https://s.shopee.com.br/104P5S4FzX",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Projetor Astronauta Starry Sky ",
        preco: "R$ 69,90",
        imagem: "shopee/projetor.png",
        link: "https://s.shopee.com.br/6007Vp00iA",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Kit com 5 bodys",
        preco: "R$ 49,99",
        imagem: "shopee/body.png",
        link: "https://s.shopee.com.br/AUmY4d0b6u",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Máquina de cortar cabelo e barba",
        preco: "R$ 35,00",
        imagem: "shopee/cortador.png",
        link: "https://s.shopee.com.br/7UxF4R0Gk3",
        loja: "shopee",
        categoria: "beleza"
    },
    {
        nome: "Relógio masculino analógico",
        preco: "R$ 25,00",
        imagem: "shopee/relogio2.png",
        link: "https://s.shopee.com.br/8L0d1c0wXq",
        loja: "shopee",
        categoria: "acessorios"
    },
    {
        nome: "Tênis masculino preto",
        preco: "R$ 90,00",
        imagem: "shopee/tenis2.png",
        link: "https://s.shopee.com.br/4V4n7wP6A7",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Whey Protein",
        preco: "R$ 89,90",
        imagem: "ML/whey.png",
        link: "https://mercadolivre.com/sec/1k7Lp5K",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "Kit 12 Esmaltes Gel",
        preco: "R$ 39,90",
        imagem: "ML/esmaltes.png",
        link: "https://mercadolivre.com/sec/1L6p9R5",
        loja: "ml",
        categoria: "beleza"
    },
    {
        nome: "Kit 5 Calças moletom",
        preco: "R$ 99,90",
        imagem: "shopee/moletom.png",
        link: "https://s.shopee.com.br/8L0ddy4TjY",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Anel de Prata Ajustável",
        preco: "R$ 29,90",
        imagem: "shopee/anel.png",
        link: "https://s.shopee.com.br/5V7e8y7z8P",
        loja: "shopee",
        categoria: "acessorios"
    },
    {
        nome: "Luminária de Mesa",
        preco: "R$ 29,90",
        imagem: "ML/luminaria2.png",
        link: "https://mercadolivre.com/sec/2g2o9p0",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Mesa de centro",
        preco: "R$ 150,00",
        imagem: "ML/mesa.png",
        link: "https://mercadolivre.com/sec/2g2o9p0",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Corrente Cordão Colar Masculino Grumet Em Aço Inox Prata Cor Prateado",
        preco: "R$ 22,90",
        imagem: "ML/prata.png",
        link: "https://mercadolivre.com/sec/2iJXr7Z",
        loja: "ml",
        categoria: "acessorios"
    }
];

const logos = {
    shopee: "fotos/Shopee.jpg",
    shein: "fotos/shein.png",
    ml: "ML/mercado.png"
};

const container = document.getElementById('produtosContainer');
const botoesCategoria = document.querySelectorAll('.category-btn');
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

function renderizarProdutos(filtro = 'todos') {
    container.innerHTML = '';
    const produtosFiltrados = produtos.filter(produto => filtro === 'todos' || produto.categoria === filtro);

    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');
        const logoSrc = logos[produto.loja] || "";
        const lojaCapitalizada = produto.loja.charAt(0).toUpperCase() + produto.loja.slice(1);

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="card-image">
            <h2 class="card-title">
                ${logoSrc ? `<img src="${logoSrc}" class="logo-loja" alt="Logo ${lojaCapitalizada}">` : ""}
                <span class="product-name">${produto.nome}</span>
            </h2>
            <p class="product-price">${produto.preco}</p>
            <a href="${produto.link}" target="_blank" class="card-link">Ver na ${lojaCapitalizada}</a>
        `;

        container.appendChild(card);
    });
}

function filtrarProdutos(categoria) {
    botoesCategoria.forEach(btn => btn.classList.remove('active'));
    const botaoAtivo = document.querySelector(`.category-btn[data-categoria="${categoria}"]`);
    if (botaoAtivo) {
        botaoAtivo.classList.add('active');
    }
    renderizarProdutos(categoria);
}

document.addEventListener('DOMContentLoaded', () => {
    botoesCategoria.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = e.target.dataset.categoria;
            filtrarProdutos(categoria);
            sidebar.classList.remove('active');
        });
    });

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    renderizarProdutos();
});
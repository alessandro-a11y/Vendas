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
    //editar daqui
   ,
    {
        nome: "Copo Térmico Para Café Com Visor Temperatura 450ml Inox",
        preco: "R$ 34,31",
        imagem: "ML/Stanley.webp",
        link: "https://mercadolivre.com/sec/1n1vbJJ",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Dilabol Pump Pré Treino Pote 300g Sabor Frutas Vermelhas Diabo Verde - FTW",
        preco: "R$ 64,93",
        imagem: "ML/djabo.webp",
        link: "https://mercadolivre.com/sec/2aSBbr7",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "kit 24 velas",
        preco: "R$ 37,28",
        imagem: "ML/velas.webp",
        link: "https://mercadolivre.com/sec/1wyWmfu",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Barra Porta Fixa Exercicio Costas Braços Crossfit Musculação Cor Prateado",
        preco: "R$ 43,90",
        imagem: "ML/barra.webp",
        link: "https://mercadolivre.com/sec/2cQzRym",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Óculos Esportivo De Sol Ciclismo Corrida Espelhado Uv400",
        preco: "R$ 52,39",
        imagem: "ML/oculosc.webp",
        link: "https://mercadolivre.com/sec/2B1u82d",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Kit camisa e short Compressão",
        preco: "R$ 94,90",
        imagem: "fotos/compressao.jpg",
        link: "https://s.shopee.com.br/6007Vp00iA",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Lavadora alta pressão",
        preco: "R$ 88,98 - R$ 115,90",
        imagem: "fotos/pressao.jpg",
        link: "https://s.shopee.com.br/AUmY4d0b6u",
        loja: "shopee",
        categoria: "tecnologia"
    },
    {
        nome: "Máquina de cortar cabelo e barba",
        preco: "R$ 20,59",
        imagem: "fotos/maquina.jpg",
        link: "https://s.shopee.com.br/qZMqvORPt",
        loja: "shopee",
        categoria: "beleza"
    },
    {
        nome: "Espelho Oval grande com Led",
        preco: "R$ 56,90 - R$ 149,90",
        imagem: "fotos/oval.jpg",
        link: "https://s.shopee.com.br/7V6GmehBqg",
        loja: "shopee",
        categoria: "decoracao"
    },
    {
        nome: "Tênis masculino",
        preco: "R$ 47,90 a R$ 67,90",
        imagem: "fotos/mac.jpg",
        link: "https://s.shopee.com.br/5py2nBFdXK",
        loja: "shopee",
        categoria: "acessorios"
    },
    {
        nome: "Suplemento Tasty Whey 3w Gourmet Whey Protein Adaptogen Science Pote 900g Sabor Chocomaltine",
        preco: "R$ 149,90",
        imagem: "ML/whey900.webp",
        link: "https://mercadolivre.com/sec/1PcDK8U",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "Creatina 100% Pura 150g Integralmédica",
        preco: "R$ 32,90",
        imagem: "ML/integral.webp",
        link: "https://mercadolivre.com/sec/1peUBJA",
        loja: "ml",
        categoria: "suplementos"
    },
    {
        nome: "Camiseta T-shirt 100% algodão Vivo Por Ele",
        preco: "R$ 18,90-34,90",
        imagem: "fotos/jesus.jpg",
        link: "https://s.shopee.com.br/7ATQMbW0uQ",
        loja: "shopee",
        categoria: "roupas"
    },
    {
        nome: "Calça Masculina Sarja Premium Esporte Fino Bolso Faca Lycra",
        preco: "R$ 65,98",
        imagem: "ML/calças.webp",
        link: "https://mercadolivre.com/sec/2R8Jb23",
        loja: "ml",
        categoria: "roupas"
    },
    {
        nome: "Monitor Led Widescreen Hd Hayom 19 Hdmi E Vga 60hz Top Cor Preto",
        preco: "R$ 287,99",
        imagem: "ML/monitor.webp",
        link: "https://mercadolivre.com/sec/2645G3M",
        loja: "ml",
        categoria: "decoracao"
    },
    {
        nome: "Kit Gamer Completo Mobilador Teclado Mouse Cor Preto Tipo C Exbom",
        preco: "R$ 69,90",
        imagem: "ML/kit-gamer.webp",
        link: "https://mercadolivre.com/sec/2FSNLKU",
        loja: "ml",
        categoria: "tecnologia"
    },
    {
        nome: "Capa Capinha Transparente Anti Impacto Para iPhone 13",
        preco: "22,79",
        imagem: "ML/capinha-iphone-13.webp",
        link: "https://mercadolivre.com/sec/1yXMsRt",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Capa Capinha Magsafe P/ iPhone 11 12 13 14 15 16 17 Pro Max",
        preco: "R$ 27,39",
        imagem: "ML/Pro.webp",
        link: "https://mercadolivre.com/sec/21ak6Nt",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Mouse Jogos 800-2000 Dpi Gamer 6 Botões Gt-m32 Golden Ultra",
        preco: "R$ 33,97",
        imagem: "ML/mouse.webp",
        link: "https://mercadolivre.com/sec/23YE8M4",
        loja: "ml",
        categoria: "tecnologia"
    },
    {
        nome: "Kit Limpeza 8x1 Escova Macia Teclado Fones Celular Eficiente",
        preco: "R$ 19,00",
        imagem: "ML/kit-limpeza.webp",
        link: "https://mercadolivre.com/sec/2vhEwD7",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome:"Corrente De Prata 925 Fina Masculina Veneziana Cordão 60cm Prata 925 Maciça Veneziana Luxo",
        preco: "R$ 27,28",
        imagem: "ML/corrente-925.webp",
        link: "https://mercadolivre.com/sec/1qNimZM",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Kit 3 Camisetas Térmicas Masculina Segunda Pele Camisa Uv50-",
        preco: "R$ 78,66",
        imagem: "ML/kit-camisetas.webp",
        link: "https://mercadolivre.com/sec/1XDfDZV",
        loja: "ml",
        categoria: "roupas"
    },
    {
        nome: "Pochete Feminina Moderna Bolsa Transversal Cintura Fashion Cor Preta",
        preco: "R$ 19,90",
        imagem: "ML/pochete.webp",
        link: "https://mercadolivre.com/sec/1ixoMt7",
        loja: "ml",
        categoria: "acessorios"
    },
    {
        nome: "Carregador Portátil 10000mah Power Bank Turbo Rápida 22.5w",
        preco: "R$ 55,16",
        imagem: "ML/carregador-portatil.webp",
        link: "https://mercadolivre.com/sec/1GVV31k",
        loja: "ml",
        categoria: "tecnologia"
    },
    {
        nome: "Carregador Portátil 10000mah Power Bank Turbo Rápida 22.5w",
        preco: "R$ 55,16",
        imagem: "ML/carregador-portatil.webp",
        link: "https://mercadolivre.com/sec/1GVV31k",
        loja: "ml",
        categoria: "tecnologia"
    },
];

const logos = {
    shopee: "fotos/Shopee.jpg",
    shein: "fotos/shein.png",
    ml: "ML/mercado.png"
};

// ===== CONFIGURAÇÃO E CACHE =====
const CONFIG = {
    selectors: {
        container: '#produtosContainer',
        categoryButtons: '.category-btn',
        menuButton: '#menuButton',
        sidebar: '#sidebar'
    },
    classes: {
        active: 'active',
        card: 'card',
        logoLoja: 'logo-loja',
        productName: 'product-name'
    },
    categories: {
        ALL: 'todos'
    }
};

// Cache de elementos DOM
const elements = {};

// ===== UTILITÁRIOS =====
const utils = {
    // Capitaliza primeira letra
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    
    // Sanitiza strings para prevenir XSS
    sanitize: (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },
    
    // Debounce para otimizar eventos
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
};

// ===== GERENCIADOR DE PRODUTOS =====
class ProductManager {
    constructor(produtos, logos) {
        this.produtos = produtos || [];
        this.logos = logos || {};
        this.categoriaAtual = CONFIG.categories.ALL;
        this.fragment = document.createDocumentFragment();
    }

    // Filtra produtos por categoria
    filtrar(categoria) {
        if (categoria === CONFIG.categories.ALL) {
            return this.produtos;
        }
        return this.produtos.filter(p => p.categoria === categoria);
    }

    // Cria um card de produto otimizado
    criarCard(produto) {
        const card = document.createElement('div');
        card.className = CONFIG.classes.card;
        card.setAttribute('data-categoria', produto.categoria);
        
        const logoSrc = this.logos[produto.loja] || '';
        const lojaCapitalizada = utils.capitalize(produto.loja);
        
        // Sanitiza dados para segurança
        const nomeSanitizado = utils.sanitize(produto.nome);
        const precoSanitizado = utils.sanitize(produto.preco);
        
        // Template otimizado
        const logoHTML = logoSrc 
            ? `<img src="${logoSrc}" class="${CONFIG.classes.logoLoja}" alt="Logo ${lojaCapitalizada}" loading="lazy">` 
            : '';
        
        card.innerHTML = `
            <img src="${produto.imagem}" 
                 alt="${nomeSanitizado}" 
                 class="card-image" 
                 loading="lazy"
                 onerror="this.src='placeholder.jpg'">
            <h2 class="card-title">
                ${logoHTML}
                <span class="${CONFIG.classes.productName}">${nomeSanitizado}</span>
            </h2>
            <p class="product-price" aria-label="Preço: ${precoSanitizado}">${precoSanitizado}</p>
            <a href="${produto.link}" 
               target="_blank" 
               rel="noopener noreferrer"
               class="card-link"
               aria-label="Ver ${nomeSanitizado} na ${lojaCapitalizada}">
                Ver na ${lojaCapitalizada}
            </a>
        `;
        
        return card;
    }

    // Renderiza produtos com performance otimizada
    renderizar(categoria = CONFIG.categories.ALL) {
        this.categoriaAtual = categoria;
        const produtosFiltrados = this.filtrar(categoria);
        
        // Limpa container
        elements.container.innerHTML = '';
        
        // Usa DocumentFragment para melhor performance
        this.fragment = document.createDocumentFragment();
        
        if (produtosFiltrados.length === 0) {
            const mensagem = document.createElement('p');
            mensagem.className = 'no-products';
            mensagem.textContent = 'Nenhum produto encontrado nesta categoria.';
            this.fragment.appendChild(mensagem);
        } else {
            produtosFiltrados.forEach(produto => {
                const card = this.criarCard(produto);
                this.fragment.appendChild(card);
            });
        }
        
        // Atualiza DOM uma única vez
        elements.container.appendChild(this.fragment);
        
        // Dispara evento customizado
        this.dispararEvento('produtosRenderizados', { 
            categoria, 
            quantidade: produtosFiltrados.length 
        });
    }

    // Sistema de eventos customizados
    dispararEvento(nome, dados) {
        const evento = new CustomEvent(nome, { detail: dados });
        document.dispatchEvent(evento);
    }
}

// ===== GERENCIADOR DE UI =====
class UIManager {
    constructor(productManager) {
        this.productManager = productManager;
    }

    // Inicializa elementos DOM
    inicializarElementos() {
        elements.container = document.querySelector(CONFIG.selectors.container);
        elements.categoryButtons = document.querySelectorAll(CONFIG.selectors.categoryButtons);
        elements.menuButton = document.querySelector(CONFIG.selectors.menuButton);
        elements.sidebar = document.querySelector(CONFIG.selectors.sidebar);

        // Valida elementos essenciais
        if (!elements.container) {
            console.error('Container de produtos não encontrado');
            return false;
        }
        return true;
    }

    // Atualiza estado dos botões de categoria
    atualizarBotoesCategoria(categoriaAtiva) {
        elements.categoryButtons.forEach(btn => {
            const isActive = btn.dataset.categoria === categoriaAtiva;
            btn.classList.toggle(CONFIG.classes.active, isActive);
            btn.setAttribute('aria-pressed', isActive);
        });
    }

    // Filtra produtos e atualiza UI
    filtrarProdutos(categoria) {
        this.atualizarBotoesCategoria(categoria);
        this.productManager.renderizar(categoria);
        this.fecharSidebar();
    }

    // Toggle sidebar
    toggleSidebar() {
        const isActive = elements.sidebar?.classList.toggle(CONFIG.classes.active);
        elements.menuButton?.setAttribute('aria-expanded', isActive);
    }

    // Fecha sidebar
    fecharSidebar() {
        if (elements.sidebar) {
            elements.sidebar.classList.remove(CONFIG.classes.active);
            elements.menuButton?.setAttribute('aria-expanded', 'false');
        }
    }

    // Configura listeners de eventos
    configurarEventos() {
        // Eventos de categoria
        elements.categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const categoria = e.currentTarget.dataset.categoria;
                if (categoria) {
                    this.filtrarProdutos(categoria);
                }
            });
        });

        // Evento do menu mobile
        if (elements.menuButton && elements.sidebar) {
            elements.menuButton.addEventListener('click', () => {
                this.toggleSidebar();
            });

            // Fecha sidebar ao clicar fora
            document.addEventListener('click', (e) => {
                if (elements.sidebar.classList.contains(CONFIG.classes.active) &&
                    !elements.sidebar.contains(e.target) &&
                    !elements.menuButton.contains(e.target)) {
                    this.fecharSidebar();
                }
            });

            // Fecha sidebar com tecla Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && elements.sidebar.classList.contains(CONFIG.classes.active)) {
                    this.fecharSidebar();
                }
            });
        }

        // Event listener customizado
        document.addEventListener('produtosRenderizados', (e) => {
            console.log(`✅ ${e.detail.quantidade} produtos renderizados na categoria: ${e.detail.categoria}`);
        });
    }
}

// ===== INICIALIZAÇÃO =====
class App {
    constructor(produtos, logos) {
        this.productManager = new ProductManager(produtos, logos);
        this.uiManager = new UIManager(this.productManager);
    }

    init() {
        // Aguarda DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        // Inicializa elementos
        if (!this.uiManager.inicializarElementos()) {
            console.error('Falha ao inicializar elementos DOM');
            return;
        }

        // Configura eventos
        this.uiManager.configurarEventos();

        // Renderização inicial
        this.productManager.renderizar();

        console.log('🚀 App inicializado com sucesso!');
    }
}

// ===== EXPORTAÇÃO E INICIALIZAÇÃO =====
// Para usar, basta instanciar:
// const app = new App(produtos, logos);
// app.init();

// Se as variáveis produtos e logos já existem globalmente:
if (typeof produtos !== 'undefined' && typeof logos !== 'undefined') {
    const app = new App(produtos, logos);
    app.init();
}
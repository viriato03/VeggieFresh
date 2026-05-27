const farmsData = [
    {
        id: "alvorecer",
        name: "Herdade do Alvorecer",
        owner: "Família Alvorecer - Est. 1975",
        rating: 4.6,
        reviews: 38,
        distance: "4.1 miles",
        address: "Rua do Campo, Évora",
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop",
        description: "Especialistas em laticínios biológicos e ovos de galinhas criadas ao ar livre. Produção 100% sustentável e focada no bem-estar animal.",
        tags: ["Dairy", "Eggs"],
        products: [
            { name: "Leite Fresco do Dia", price: 3.00, inStock: true, unit: "litro" },
            { name: "Queijo Curado Tradicional", price: 15.00, inStock: true, unit: "kg" },
            { name: "Manteiga Artesanal", price: 4.50, inStock: false, unit: "unid" }
        ]
    },
    {
        id: "vale-verde",
        name: "Quinta do Vale Verde",
        owner: "João Santos - Est. 2015",
        rating: 4.8,
        reviews: 124,
        distance: "2.3 miles",
        address: "Rua das Flores, Aveiro",
        image: "https://images.unsplash.com/photo-1595856342890-e575775c7424?q=80&w=1200&auto=format&fit=crop",
        description: "Cultivamos os melhores vegetais orgânicos da região de Aveiro. Sem pesticidas e colhidos na manhã em que são entregues.",
        tags: ["Vegetables", "Organic"],
        products: [
            { name: "Cenouras Biológicas", price: 1.50, inStock: true, unit: "molho" },
            { name: "Alface Crespa", price: 0.90, inStock: true, unit: "unid" },
            { name: "Tomate Coração de Boi", price: 2.50, inStock: true, unit: "kg" }
        ]
    },
    {
        id: "casal-campos",
        name: "Casal dos Campos",
        owner: "Maria Silva - Est. 2002",
        rating: 4.5,
        reviews: 89,
        distance: "3.2 miles",
        address: "Estrada Nacional 109, Ílhavo",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
        description: "Criação de aves em regime de total liberdade. Alimentação natural para garantir o melhor sabor e saúde.",
        tags: ["Poultry", "Meat"],
        products: [
            { name: "Frango do Campo", price: 6.50, inStock: true, unit: "kg" },
            { name: "Ovos Classe A", price: 2.20, inStock: true, unit: "dúzia" },
            { name: "Pato Inteiro", price: 9.00, inStock: false, unit: "kg" }
        ]
    },
    {
        id: "monte-ervas",
        name: "Monte das Ervas",
        owner: "Tiago Mendes - Est. 2018",
        rating: 4.7,
        reviews: 56,
        distance: "5.0 miles",
        address: "Caminho da Ribeira, Vagos",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
        description: "Mais de 30 variedades de ervas aromáticas e medicinais cultivadas com respeito pela terra. Perfeitas para chás, infusões e culinária.",
        tags: ["Herbs", "Organic"],
        products: [
            { name: "Manjericão Fresco", price: 1.20, inStock: true, unit: "vaso" },
            { name: "Hortelã-Pimenta", price: 1.00, inStock: true, unit: "molho" },
            { name: "Alecrim", price: 1.50, inStock: true, unit: "vaso" }
        ]
    },
    {
        id: "solar-abelhas",
        name: "Solar das Abelhas",
        owner: "Rui e Ana Costa - Est. 2010",
        rating: 4.9,
        reviews: 210,
        distance: "6.8 miles",
        address: "Lugar da Serra, Albergaria-a-Velha",
        image: "https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=1200&auto=format&fit=crop",
        description: "Mel 100% puro e cru, extraído a frio para preservar todos os nutrientes e enzimas naturais. Tratamos as nossas abelhas como família.",
        tags: ["Honey", "Raw"],
        products: [
            { name: "Mel de Rosmaninho", price: 6.50, inStock: true, unit: "frasco 500g" },
            { name: "Pólen Biológico", price: 8.00, inStock: true, unit: "frasco 200g" },
            { name: "Geleia Real", price: 12.00, inStock: false, unit: "frasco 50g" }
        ]
    },
    {
        id: "pomar-douro",
        name: "Pomar do Douro",
        owner: "Carlos Oliveira - Est. 1995",
        rating: 4.8,
        reviews: 145,
        distance: "8.2 miles",
        address: "Vale das Frutas, Estarreja",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",
        description: "Frutas da época diretamente da árvore para a sua mesa. Focamo-nos em variedades tradicionais e no sabor autêntico.",
        tags: ["Fruits", "Seasonal"],
        products: [
            { name: "Maçã Riscadinha", price: 2.00, inStock: true, unit: "kg" },
            { name: "Peras Rocha", price: 1.80, inStock: true, unit: "kg" },
            { name: "Cesta de Fruta da Época", price: 15.00, inStock: true, unit: "cesta 5kg" }
        ]
    }
];
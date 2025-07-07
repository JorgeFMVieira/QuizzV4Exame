export type Question = {
  question: string
  options: string[]
  correctIndex: number
}

const questions: Record<string, Question[]> = {
  easy: [
    {
      question: 'Quantos bits tem um endereço IPv4?',
      options: ['32', '64', '128', '16'],
      correctIndex: 0
    },
    {
      question: 'Qual destes é um endereço IPv4 válido?',
      options: ['192.168.0.1', '300.168.0.1', '192.168.256.1', '192.168.-1.0'],
      correctIndex: 0
    },
    {
      question: 'Qual é a função da máscara de sub-rede?',
      options: [
        'Separar rede de host',
        'Atribuir IPs automaticamente',
        'Proteger com firewall',
        'Definir gateway'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual é o endereço de loopback?',
      options: ['127.0.0.1', '255.255.255.255', '192.168.1.1', '0.0.0.0'],
      correctIndex: 0
    },
    {
      question: 'Qual é um endereço IP privado?',
      options: ['10.0.0.1', '8.8.8.8', '172.33.0.1', '192.0.2.1'],
      correctIndex: 0
    },
    {
      question: 'Quantas classes de IP existem no modelo clássico?',
      options: ['5', '3', '4', '6'],
      correctIndex: 0
    },
    {
      question: 'O que significa DHCP?',
      options: [
        'Atribuição dinâmica de IPs',
        'Protocolo de firewall',
        'Criptografia de dados',
        'Controlo de rede'
      ],
      correctIndex: 0
    },
    {
      question: 'O que significa NAT?',
      options: [
        'Network Address Translation',
        'New Access Type',
        'Network Allocation Table',
        'Node Address Tracker'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual destas máscaras corresponde a /24?',
      options: ['255.255.255.0', '255.255.0.0', '255.0.0.0', '255.255.255.255'],
      correctIndex: 0
    },
    {
      question: 'O endereço 0.0.0.0 representa:',
      options: [
        'Endereço desconhecido ou padrão',
        'Broadcast',
        'Loopback',
        'IP reservado'
      ],
      correctIndex: 0
    }
  ],

  medium: [
    {
      question: 'Qual é o intervalo da Classe A?',
      options: [
        '1.0.0.0 a 126.255.255.255',
        '128.0.0.0 a 191.255.255.255',
        '192.0.0.0 a 223.255.255.255',
        '224.0.0.0 a 239.255.255.255'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual destas máscaras é válida?',
      options: [
        '255.255.255.240',
        '255.255.255.250',
        '255.0.255.0',
        '255.255.0.255'
      ],
      correctIndex: 0
    },
    {
      question: 'Quantos hosts há numa rede /29?',
      options: ['6', '8', '4', '2'],
      correctIndex: 0
    },
    {
      question: 'Qual é o endereço de broadcast numa rede 192.168.1.0/24?',
      options: [
        '192.168.1.255',
        '192.168.1.0',
        '192.168.1.1',
        '192.168.0.255'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual destas máscaras permite 254 hosts?',
      options: ['255.255.255.0', '255.255.255.128', '255.255.0.0', '255.0.0.0'],
      correctIndex: 0
    },
    {
      question: 'O que é APIPA?',
      options: [
        'Atribuição automática de IPs (169.254.x.x)',
        'Protocolo de DNS',
        'Endereço reservado',
        'Endereço externo'
      ],
      correctIndex: 0
    },
    {
      question: 'Um IP com /30 suporta quantos hosts utilizáveis?',
      options: ['2', '4', '6', '8'],
      correctIndex: 0
    },
    {
      question: 'Qual destas opções define um endereço de rede?',
      options: [
        'O primeiro IP do intervalo',
        'O último IP',
        'O broadcast',
        'O gateway'
      ],
      correctIndex: 0
    },
    {
      question: 'DNS serve para:',
      options: [
        'Traduzir nomes em IPs',
        'Gerar IPs',
        'Proteger a rede',
        'Fazer backup'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual é o endereço de rede de 192.168.1.76/26?',
      options: ['192.168.1.64', '192.168.1.0', '192.168.1.128', '192.168.1.192'],
      correctIndex: 0
    }
  ],

  hard: [
    {
      question: 'Quantos endereços diferentes o IPv4 pode fornecer?',
      options: [
        '4.294.967.296',
        '2.147.483.648',
        '65.535',
        '1.073.741.824'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual IP está reservado para broadcast limitado?',
      options: ['255.255.255.255', '127.0.0.1', '0.0.0.0', '192.168.1.255'],
      correctIndex: 0
    },
    {
      question: 'Um endereço com /32 representa:',
      options: [
        'Um único host',
        'Toda a rede',
        'Endereço de broadcast',
        'Sub-rede completa'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual destas opções NÃO é um IP reservado?',
      options: ['8.8.8.8', '127.0.0.1', '169.254.1.1', '192.168.0.1'],
      correctIndex: 0
    },
    {
      question: 'Quantos hosts numa rede com máscara 255.255.255.224?',
      options: ['30', '32', '62', '126'],
      correctIndex: 0
    },
    {
      question: 'Quantas sub-redes podemos criar com uma máscara /27?',
      options: ['8', '4', '16', '2'],
      correctIndex: 0
    },
    {
      question: 'Qual protocolo gere rotas dinâmicas de IP?',
      options: ['RIP', 'DNS', 'DHCP', 'FTP'],
      correctIndex: 0
    },
    {
      question: 'O que significa CIDR?',
      options: [
        'Classless Inter-Domain Routing',
        'Central IP Domain Routing',
        'Custom IP Default Range',
        'Controlled IP Dynamic Routing'
      ],
      correctIndex: 0
    },
    {
      question: 'Qual endereço pertence à Classe B?',
      options: ['172.16.0.1', '10.0.0.1', '192.168.0.1', '224.0.0.1'],
      correctIndex: 0
    },
    {
      question: 'IPv4 atua em que camada do modelo OSI?',
      options: [
        'Camada de Rede',
        'Camada de Transporte',
        'Camada Física',
        'Camada de Aplicação'
      ],
      correctIndex: 0
    }
  ]
}

export default questions

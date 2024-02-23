import { IndicatorGroup } from "./definitions";

const indicatorsList: IndicatorGroup[] = [
  {
    id: 1,
    subject: "HABITAÇÃO",
    indicators: [
      {
        indicatorId: 1,
        title:
          "Famílias em atendimento habitacional provisório por situação de risco e emergência",
        subtitle:
          "Famílias em atendimento habitacional provisório por situação de risco e emergência",
        mapPath: "https://datawrapper.dwcdn.net/tIWtX/1/",
        histogramPath: "https://datawrapper.dwcdn.net/gZABq/3/",
        tablePath: "https://datawrapper.dwcdn.net/wVxkG/2/",
        odsPath: "SDG-11.svg",
        formula:
          " ( 'Número de famílias em atendimento habitacional provisório (Auxílio Aluguel) por situação de risco e emergência' / 'Número de famílias beneficiárias de Auxílio Aluguel' ) * 100",
        remarks:
          " (1) São considerados como motivos de inclusão no Auxílio Aluguel por risco ou emergência as seguintes situações emergenciais ou de risco: geológico (escorregamentos em encostas e solapamento/erosão das margens de córregos), hidrológico (inundação, alagamento, enchente), desabamento, incêndio e contaminação. São incluídas no cálculo famílias que estejam com o cadastro ativo no Auxílio Aluguel, ainda que estejam com os pagamentos bloqueados por motivos diversos como a necessidade de atualização cadastral.",
        year: 2022,
        source: "SEHAB;DEPLAN",
        bestDistrict: 40,
        bestValue: 0,
        worseDistrict: 14,
        worseValue: 100,
        median: 37.03,
        mean: 37.03,
        asymmetry: 17,
      },
    ],
  },
  {
    id: 2,
    subject: "POPULAÇÃO",
    indicators: [
      {
        indicatorId: 2,
        title:
          "População total",
        subtitle:
          "População total, por distrito",
        mapPath: "https://datawrapper.dwcdn.net/Q3LIP/2/",
        histogramPath: "",
        tablePath: "",
        odsPath: "",
        formula:
          "População total do distrito",
        remarks:
          " Projeção da população para o ano de 2020, com base em dados do Censo demográfico de 2010.",
        year: 2022,
        source: "Sistema Seade de projeções populacionais",
        bestDistrict: "Grajaú",
        bestValue: 395381,
        worseDistrict: "Marsilac",
        worseValue: 8499,
        median: 37.03,
        mean: 37.03,
        asymmetry: 17,
      },
    ],
  },
];

export default indicatorsList;

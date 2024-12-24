export const getFeedbacks = {
  tags: ['Предложение'],
  description: 'Возврат всех предложений',
  operationId: 'getFeedbacks',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [ {
    description: "Выберите страницу",
    name: "page",
    in: "query",
    required: false,
    type: "integer"
  },
  {
    description: "Выберите количество записей",
    name: "limit",
    in: "query",
    required: false,
    type: "integer"
  },
  {
    description: "Выберите поле сортировки",
    name: "sort",
    in: "query",
    required: false,
    type: "integer"
  },
  {
    description: "Выберите тип сортировки(asc, desc)",
    name: "order",
    in: "query",
    required: false,
    type: "integer"
  }
],
  responses: {
    '200': {
      description: 'Список предложений',
      content: {
        'application/json': {
          schema: {
            "$ref": "#/components/schemas/Feedback"            
          },
        },
      },
    },
  },
};




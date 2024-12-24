export const getComments = {
  tags: ['Комментарии'],
  description: 'Возврат всех комментарий',
  operationId: 'getComments',
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
      description: 'Список комментприй',
      content: {
        'application/json': {
          schema: {
            "$ref": "#/components/schemas/Comment"            
          },
        },
      },
    },
  },
};




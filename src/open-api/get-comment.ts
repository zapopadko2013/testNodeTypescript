export const getComments = {
  tags: ['Комментарии'],
  description: 'Возврат всех комментарий',
  operationId: 'getComments',
  security: [
    {
      bearerAuth: [],
    },
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




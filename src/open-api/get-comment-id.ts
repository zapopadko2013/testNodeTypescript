export const getCommentId = {
  tags: ['Комментарии'],
  description: 'Возврат выбранного комментария',
  operationId: 'getCommentId',
  security: [
    {
      bearerAuth: [],
    },
  ],
  
  responses: {
    '200': {
      description: 'Комментарии',
      content: {
        'application/json': {
          schema: {
            "$ref": "#/components/schemas/Comment"            
          },
        },
      },
    },
  },
  parameters: [ {
    description: "Выберите комментарий",
    name: "id",
    in: "path",
    required: true,
    type: "integer"
  }
],
};




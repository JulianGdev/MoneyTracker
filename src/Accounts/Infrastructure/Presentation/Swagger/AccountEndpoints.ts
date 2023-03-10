/**
 * @openapi
 *
 * /account/:
 *  get:
 *    tags: [Account]
 *    summary: Get all accounts
 *    description: Use to request all accounts
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: List of accounts
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/AccountResponse'
 *              example:
 *                - uuid: 4911b72b-a448-4e2d-874b-ed91874d1061
 *                  name: CaixaBank
 *                  icon: CA
 *                  type: General
 *                  currency: EUR
 *                  visible: 1
 *                  enable: 1
 *                - uuid: 128e8322-991c-47ae-9ba1-845665d7d0ad
 *                  name: Santander
 *                  icon: SA
 *                  type: Savings
 *                  currency: EUR
 *                  visible: 1
 *                  enable: 1
 *
 *  post:
 *    tags: [Account]
 *    summary: Create a new account
 *    description: Use to create an account
 *    produces:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AccountCreate'
 *    responses:
 *      201:
 *        description: Account created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AccountResponse'
 *      400:
 *        description: Name is required
 *      409:
 *        description: Name already exists
 *
 * /account/{uuid}:
 *  get:
 *    tags: [Account]
 *    summary: Get one account
 *    description: Use to request one account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: uuid
 *        description: Uuid of account
 *    responses:
 *      200:
 *        description: Account by uuid
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AccountResponse'
 *      400:
 *        description: Bad uuid
 *      404:
 *        description: Account not found
 *
 *  put:
 *    tags: [Account]
 *    summary: Update an account
 *    description: Use to update an account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: uuid
 *        description: Uuid of account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AccountUpdate'
 *    responses:
 *      200:
 *        description: Account updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AccountResponse'
 *      400:
 *        description: Bad uuid
 *      404:
 *        description: Account not found
 *      409:
 *        description: Name already exists
 *
 *  delete:
 *    tags: [Account]
 *    summary: Delete an account
 *    description: Use to delete an account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: uuid
 *        description: Uuid of account
 *    responses:
 *      200:
 *        description: Account deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: boolean
 *              example: true
 *      400:
 *        description: Bad uuid
 *      404:
 *        description: Account not found
 */

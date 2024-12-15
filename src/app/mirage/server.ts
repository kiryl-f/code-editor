import { createServer, Model, RestSerializer } from 'miragejs';

export const setupMirageServer = () => {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      codeExecution: Model,
    },

    seeds(server) {
      server.create('codeExecution', {
        language: 'javascript',
        code: 'console.log("Hello, World!")',
        output: 'Hello, World!',
        status: 'success',
      });
    },

    routes() {
      this.namespace = 'api';

      this.post('/execute', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        try {
          if (attrs.language === 'javascript') {
            let result = '';
            let output = '';

            const originalConsoleLog = console.log;
            console.log = (message) => {
              output += message + '\n'; // Append logs
            };

            result = eval(attrs.code);

            console.log = originalConsoleLog;

            if (result === undefined && output) {
              result = output.trim(); 
            }

            return { status: 'success', output: result !== undefined ? String(result) : 'No output' };
          } else {
            return { status: 'error', error: 'Unsupported language' };
          }
        } catch (error) {
          return { status: 'error', error: `Execution failed: ${error.message}` };
        }
      });
    },
  });
};

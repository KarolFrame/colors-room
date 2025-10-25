import { AngularAppEngine, createRequestHandler } from '@angular/ssr'
import { getContext } from '@netlify/angular-runtime/context.mjs'

const angularAppEngine = new AngularAppEngine()

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext()

  // Aquí es donde puedes definir rutas de API personalizadas, si es necesario.
  // Por ejemplo, para crear un endpoint /api/hello:
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hola desde la API' });
  // }

  const result = await angularAppEngine.handle(request, context)
  return result || new Response('Not found', { status: 404 })
}

/**
 * Este es el manejador de solicitudes que usa el Angular CLI (durante el desarrollo o la compilación).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler)
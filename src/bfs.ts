import { isObject } from './getNumberProps';

const bfs = (graph: { [key: string]: string[] }, start = 'A') => {
  if (!isObject(graph)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const visited = [start];
  const queue = [start];

  while (queue.length) {
    const currentNode = queue.shift();
    const destinations = graph[<string>currentNode];

    for (const destination of destinations) {
      if (!visited.includes(destination)) {
        visited.push(destination);
        queue.push(destination);
      }
    }
  }

  return visited;
};

export default bfs;

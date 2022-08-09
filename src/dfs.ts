import { isObject } from './getNumberProps';

const dfs = (
  graph: { [key: string]: string[] },
  start = 'A',
  visited: string[] = []
) => {
  if (!isObject(graph)) {
    throw new Error('INVALID_ARGUMENT');
  }

  visited.push(start);
  const destinations = graph[start];

  for (const destination of destinations) {
    if (!visited.includes(destination)) {
      dfs(graph, destination, visited);
    }
  }

  return visited;
};

export default dfs;

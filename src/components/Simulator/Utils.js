import { scaleLinear } from 'd3-scale';
import { max, mean } from 'd3-array';

export function translate(x, y) {
  return `translate(${x}, ${y})`;
}

export function getNodes(layers, width, height) {
  const maxNodeCount = max(layers, (l) => l.nodes.length - 1);

  const xScale = scaleLinear()
    .domain([0, layers.length - 1])
    .range([0, width]);

  const yScale = scaleLinear().domain([0, maxNodeCount]).range([0, height]);

  const rScale = scaleLinear().domain([-1, 1]).range([2, 25]).clamp(true);

  const nodes = layers.reduce((result, layer, iLayer) => {
    const yOffset = yScale(maxNodeCount - layer.nodes.length + 1) / 2;
    const x = xScale(iLayer);
    const lastLayer = layers[iLayer - 1];

    const currentNodes = layer.nodes.map((node, iNode) => {
      let incomingWeights = [];

      if (lastLayer) {
        incomingWeights = lastLayer.nodes.map((lastNode) => {
          return lastNode.edges[iNode].weight;
        });
      }

      const outgoingWeights = node.edges.map((edge) => edge.weight);

      const visualWeight = mean(incomingWeights.concat(outgoingWeights));

      node.x = x;
      node.y = yScale(iNode) + yOffset;
      node.r = rScale(visualWeight);
      node.id = `${iLayer}__${iNode}`;
      node.layer = iLayer;
      node.index = iNode;

      return node;
    });

    return result.concat(currentNodes);
  }, []);

  return nodes;
}

export function getEdges(nodes, width, height) {
  const edges = nodes.reduce((result, node) => {
    const currentEdges = node.edges.map((edge, iEdge) => {
      const targetNode =
        nodes.find((n) => n.id === `${node.layer + 1}__${iEdge}`) || {};

      return {
        from: [node.x, node.y],
        to: [targetNode.x || width, targetNode.y || height],
        weight: edge.weight,
        isControlled: edge.active,
        layer: node.layer,
        source: node.index,
        target: iEdge,
      };
    });

    return result.concat(currentEdges);
  }, []);

  return edges.sort((b, a) =>
    a.isControlled === b.isControlled ? 0 : a.isControlled ? -1 : 1
  );
}

export default {
  translate,
  getNodes,
  getEdges,
};

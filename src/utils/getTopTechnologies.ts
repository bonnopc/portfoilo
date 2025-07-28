import recentProjectsData from "@/config/recent-projects.json";

/**
 * Extracts and counts technologies from recent projects,
 * returning the top N most used technologies with custom priority ordering
 */
export function getTopTechnologies(limit: number = 15): string[] {
  // Define priority technologies that should appear first
  const priorityTechnologies = ["React.js", "TypeScript", "GraphQL", "JavaScript", "Next.js"];

  // Count occurrences of each technology
  const technologyCount: Record<string, number> = {};

  recentProjectsData.forEach((project) => {
    project.technologies.forEach((tech) => {
      // Normalize technology names (trim whitespace and handle case consistency)
      const normalizedTech = tech.trim();
      technologyCount[normalizedTech] = (technologyCount[normalizedTech] || 0) + 1;
    });
  });

  // Get priority technologies that exist in the data
  const availablePriorityTechs = priorityTechnologies.filter((tech) => technologyCount[tech] > 0);

  // Get remaining technologies sorted by frequency
  const remainingTechnologies = Object.entries(technologyCount)
    .filter(([tech]) => !priorityTechnologies.includes(tech))
    .sort(([techA, countA], [techB, countB]) => {
      if (countB !== countA) {
        return countB - countA; // Sort by count descending
      }
      return techA.localeCompare(techB); // Sort alphabetically for ties
    })
    .map(([tech]) => tech);

  // Combine priority technologies with remaining ones, respecting the limit
  const result = [...availablePriorityTechs, ...remainingTechnologies].slice(0, limit);

  return result;
}

/**
 * Gets technology usage statistics for debugging/analysis purposes
 */
export function getTechnologyStats(): Record<string, number> {
  const technologyCount: Record<string, number> = {};

  recentProjectsData.forEach((project) => {
    project.technologies.forEach((tech) => {
      const normalizedTech = tech.trim();
      technologyCount[normalizedTech] = (technologyCount[normalizedTech] || 0) + 1;
    });
  });

  return technologyCount;
}

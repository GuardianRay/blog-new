/**
 * Converts a snake_case string to camelCase
 * @example
 * snakeToCamel('your_rating') // 'yourRating'
 * snakeToCamel('date_rated') // 'dateRated'
 */
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

/**
 * Options for converting keys to camelCase
 */
export interface ConvertToCamelCaseOptions {
  /**
   * Custom field mappings to apply during conversion
   * @example { const: 'id' } - maps 'const' field to 'id'
   */
  fieldMappings?: Record<string, string>
}

/**
 * Recursively converts all object keys from snake_case to camelCase
 * Handles arrays, nested objects, and primitive values
 *
 * @param obj - The object or array to convert
 * @param options - Optional configuration for field mappings
 * @returns The converted object with camelCase keys
 */
export function convertKeysToCamelCase<T = unknown>(
  obj: T,
  options: ConvertToCamelCaseOptions = {},
  // biome-ignore lint/suspicious/noExplicitAny: Return type needs to be flexible for dynamic key conversion
): any {
  const { fieldMappings = {} } = options

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item, options))
  }

  // Handle null or non-object values
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return obj
  }

  // Convert object keys
  // biome-ignore lint/suspicious/noExplicitAny: Dynamic object structure requires flexible typing
  const converted: Record<string, any> = {}
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = snakeToCamel(key)
    converted[camelKey] =
      typeof value === 'object' && value !== null && !Array.isArray(value)
        ? convertKeysToCamelCase(value, options)
        : value

    // Apply custom field mappings
    if (key in fieldMappings) {
      converted[fieldMappings[key]] = value
    }
  }

  return converted
}

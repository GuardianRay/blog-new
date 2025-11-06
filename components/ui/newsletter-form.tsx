// Newsletter form component - API functionality removed
export interface NewsletterFormProps {
  title?: string
  apiUrl?: string
}

export function NewsletterForm({
  title = 'Subscribe to the newsletter',
}: NewsletterFormProps) {
  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Newsletter subscription is currently unavailable.
      </div>
    </div>
  )
}

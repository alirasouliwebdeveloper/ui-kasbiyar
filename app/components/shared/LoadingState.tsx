export function LoadingState({ text = "در حال بارگذاری..." }: { text?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mr-3"></div>
      <span className="text-muted-foreground">{text}</span>
    </div>
  )
}

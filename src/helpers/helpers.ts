import { ZodSchema } from 'zod'

export const checkData = (schema: ZodSchema<any>, data: any) => {
  const parse = schema.safeParse(data)
  if (!parse.success) console.log(parse.error)
}

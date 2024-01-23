
"use client"

import { Button } from "@/shadcn/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form"
import { Input } from "@/shadcn/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shadcn/ui/select"
import { Textarea } from "@/shadcn/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  firstName: z.string().min(2, "Too short!"),
  lastName: z.string().min(2, "Too short!"),
  inquiry: z.enum(["Colab", "Client"]),
  email: z.string().email("Invalid email!"),
  message: z.string().min(10, "Too short!"),
})

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      inquiry: undefined,
      email: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const apiEndpoint = '/api/email';
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.message);
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <div className="flex justify-between gap-4 sm:text-[1.5vw]">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-1/2 ">
                <FormLabel className="sm:text-[1.5vw]">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} className="former" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-1/2">

                <FormLabel className="sm:text-[1.5vw]">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} className="former" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="inquiry"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className="sm:text-[1.5vw] text-black">Inquiry</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} >
                  <FormControl>
                    <SelectTrigger className="former text-gray-600">
                      <SelectValue placeholder="Select Type of Email" className="bg-cream text-black" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="former text-black">
                    <SelectItem value="Client" className="sm:text-[1.5vw] text-black">Client</SelectItem>
                    <SelectItem value="Colab" className="sm:text-[1.5vw] text-black">Colab</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className="sm:text-[1.5vw]">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} className="former" />
                </FormControl>
                <FormMessage />
                <FormDescription className="sm:text-[1.25vw] text-gray-600 font-bold">
                  Kindly provide valid email, so that I can get back to you.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:text-[1.5vw]">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hello..."
                  className="resize-none bg-cream former"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="former text-black hover:text-white p-6" type="submit">Send</Button>
      </form>
    </Form>
  )
}

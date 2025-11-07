import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  // Fetch posts from JSONPlaceholder API
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  // useMutation for posting (simulate login/register)
  const mutation = useMutation({
    mutationFn: async (formData) => {
      console.log("Form Data Received:", formData); // <-- log form data

      // simulate a POST request
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error posting data");
      return res.json();
    },
    onSuccess: (data) => {
      console.log("Data posted successfully:", data);
      alert("Form submitted successfully!");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  // Simple form state
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>TanStack Query Example</h2>

      <h3>Fetch Data</h3>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h3>Post Data (useMutation)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;

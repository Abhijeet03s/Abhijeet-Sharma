interface BlogPost {
   title: string;
   description: string;
   date: string;
}

const blogPosts: BlogPost[] = [
   {
      title: "Building Modern Web Applications",
      description: "Exploring the latest trends and best practices in web development.",
      date: "March 15, 2024"
   },
   {
      title: "The Art of UI Design",
      description: "Understanding the principles of creating intuitive user interfaces.",
      date: "March 10, 2024"
   }
];

export default function BlogsPage() {
   return (
      <div className="space-y-8">
         <h1 className="text-2xl font-bold">Blog Posts</h1>
         <div className="space-y-6">
            {blogPosts.map((post, index) => (
               <article key={index} className="space-y-2">
                  <h2 className="text-xl font-semibold hover:text-gray-300 cursor-pointer">
                     {post.title}
                  </h2>
                  <p className="text-gray-400">{post.description}</p>
                  <time className="text-sm text-gray-500">{post.date}</time>
               </article>
            ))}
         </div>
      </div>
   )
} 
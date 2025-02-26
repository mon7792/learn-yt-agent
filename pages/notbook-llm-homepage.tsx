import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";

export default function NotebookLMHomepage() {
  return (
    <>
      <Head>
        <title>NotebookLM - AI-powered note-taking assistant</title>
        <meta name="description" content="Your AI-powered note-taking assistant" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Image
                  src="/notebook-logo.svg" // You'll need to add this logo
                  alt="NotebookLM Logo"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-xl font-semibold">NotebookLM</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Help</Button>
                <Button>Sign in</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
                Your AI-powered <br />
                note-taking assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Upload your documents and start a conversation with an AI that understands your content
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Get started
              </Button>
            </div>

            {/* Feature Section */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
                <p className="text-gray-600">Import your documents and let AI understand them</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
                <p className="text-gray-600">Have natural conversations about your content</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                <p className="text-gray-600">Discover new connections in your documents</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

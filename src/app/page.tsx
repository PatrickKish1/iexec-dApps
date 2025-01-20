"use client"
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const DocumentationPage = () => {
  const toolkitCards = [
    {
      title: "Open Market",
      description: "A complete toolkit to build decentralized applications with end-to-end encryption. Includes smart contract management, wallet integration, and secure data handling.",
      docsUrl: "https://docs.iex.ec/sdk",
      githubUrl: "https://github.com/PatrickKish1/iexec-dApps/tree/master",
      imageUrl: "/iexec.png"
    },
    {
      title: "Web3 Blog",
      description: "Create and deploy custom oracles for your blockchain applications. Includes tools for data source integration, result encryption, and automated updates.",
      docsUrl: "https://docs.iex.ec/oracle-factory",
      githubUrl: "https://github.com/PatrickKish1/iexec-dApps/tree/master",
      imageUrl: "/iexec.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-white">iExec Documentation</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Build Confidential Computing dApps
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our developer tools and start building secure, scalable blockchain applications with iExec&apos;s confidential computing framework.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20 mb-40">
          {toolkitCards.map((card, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src={card.imageUrl}
                  width={200}
                  height={100}
                  alt={card.title}
                  className="w-full max-h-64 rounded-lg object-cover"
                  priority={true}
                />
                <p className="text-gray-300">{card.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="bg-gray-700 text-base hover:bg-blue-300 text-white"
                  onClick={() => window.open(card.docsUrl, '_blank')}
                >
                  View Documentation
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-700 text-base hover:bg-green-600 hover:text-white text-white"
                  onClick={() => window.open(card.githubUrl, '_blank')}
                >
                  <Image
                  src="/github.svg"
                  width={25}
                  height={25}
                  alt={card.title}
                  className="rounded-lg object-contain"
                  unoptimized={false}
                  priority={true}
                />
                  GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DocumentationPage;
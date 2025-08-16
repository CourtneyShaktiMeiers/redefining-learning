import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold">
          Free Your Mind with Courtney
        </h1>
        <p className="text-lg text-gray-600">
          Conscious healing, psychedelics, emotional integration, parenting, and alternative education.
        </p>
        <Button>Work With Me</Button>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-5xl">
        <Image
          src="/images/IMG_3235.jpeg"
          alt="Courtney"
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>
            I’m Courtney, a licensed educational psychologist turned holistic guide.  
            I support families, healers, and visionaries in freeing their minds through  
            self-discovery, integration, and education rooted in freedom and love.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl text-center space-y-10">
        <h2 className="text-2xl font-semibold">Offerings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-bold">Mindprint & Soulmap</h3>
              <p>
                A unique session integrating psychometric assessments and Human Design  
                to uncover how your child learns best.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-bold">Rooted & Seen</h3>
              <p>
                Soul-aligned sessions for mothers and sensitive children, helping them  
                feel grounded, understood, and supported.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-bold">Consulting</h3>
              <p>
                Private consultations for homeschooling, unschooling, and creating  
                alternative education plans for your family.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-5xl text-center space-y-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/images/IMG_2795.jpeg" alt="Gallery 1" width={400} height={400} className="rounded-lg object-cover" />
          <Image src="/images/IMG_2823.jpeg" alt="Gallery 2" width={400} height={400} className="rounded-lg object-cover" />
          <Image src="/images/IMG_2824.jpeg" alt="Gallery 3" width={400} height={400} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-xl w-full space-y-6 text-center">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
        <form className="space-y-4 text-left">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </main>
  );
}

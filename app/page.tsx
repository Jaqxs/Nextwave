"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Palette, Share2, PenTool, MoreHorizontal, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Background from "@/components/background"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [selectedService, setSelectedService] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const services = [
    {
      title: "Website Creation",
      description: "Custom, responsive websites built with cutting-edge technology.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      delay: 0.1,
      longDescription: "We create stunning, high-performance websites tailored to your specific business needs.",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web applications",
        "Website maintenance and support",
      ],
      image: "/images/code.jpg",
      benefits: [
        "Increased online visibility",
        "Better user engagement",
        "Higher conversion rates",
        "Mobile-friendly experience",
        "Fast loading speeds",
      ],
    },
    {
      title: "Graphic Designing",
      description: "Eye-catching visuals that communicate your brand message effectively.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      delay: 0.2,
      longDescription:
        "Our graphic design services help you create a visual identity that resonates with your audience.",
      features: [
        "Brand identity design",
        "Print and digital media design",
        "Illustration and infographics",
        "Packaging design",
        "Marketing collateral",
      ],
      image: "/images/design.jpg",
      benefits: [
        "Consistent brand identity",
        "Professional visual presence",
        "Effective visual communication",
        "Memorable brand recognition",
        "Stand out from competitors",
      ],
    },
    {
      title: "Social Media Management",
      description: "Strategic content creation and community engagement to grow your online presence.",
      icon: <Share2 className="h-10 w-10 text-primary" />,
      delay: 0.3,
      longDescription:
        "Our social media management services help you build and maintain a strong presence across various social platforms.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management",
        "Social media advertising",
        "Performance analytics and reporting",
      ],
      image: "/images/facebook.jpg",
      benefits: [
        "Increased brand awareness",
        "Improved customer engagement",
        "Higher website traffic",
        "Better customer insights",
        "Enhanced customer loyalty",
      ],
    },
    {
      title: "Logo Design",
      description: "Memorable, distinctive logos that represent your brand identity.",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      delay: 0.4,
      longDescription:
        "A logo is the cornerstone of your brand identity. Our logo design process focuses on creating unique, memorable logos.",
      features: [
        "Custom logo design",
        "Brand identity guidelines",
        "Logo variations for different applications",
        "Vector files for scalability",
        "Revisions and refinements",
      ],
      image: "/images/ui.jpg",
      benefits: [
        "Instant brand recognition",
        "Professional appearance",
        "Consistent brand representation",
        "Differentiation from competitors",
        "Builds trust and credibility",
      ],
    },
    {
      title: "More Digital Solutions",
      description: "From SEO optimization to digital marketing strategies tailored to your needs.",
      icon: <MoreHorizontal className="h-10 w-10 text-primary" />,
      delay: 0.5,
      longDescription:
        "Beyond our core services, we offer a range of digital solutions to help your business thrive online.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Analytics and performance tracking",
      ],
      image: "/images/digital.jpg",
      benefits: [
        "Improved search rankings",
        "Targeted traffic acquisition",
        "Higher conversion rates",
        "Data-driven decision making",
        "Measurable ROI on marketing efforts",
      ],
    },
  ]

  const portfolioItems = [
    { title: "Analytics Dashboard", category: "Web Development", image: "/images/dashboard.jpg" },
    { title: "Portfolio Website", category: "UI/UX Design", image: "/images/port2.jpg" },
    { title: "Digital Business Platform", category: "Web Development", image: "/images/setup2.jpg" },
    { title: "Custom PHP Framework", category: "Backend Development", image: "/images/port4.jpg" },
    { title: "Car Dealership Website", category: "Full Stack Development", image: "/images/code3.jpg" },
    { title: "Developer Tools", category: "Software Development", image: "/images/port3.jpg" },
  ]

  return (
    <main className="relative">
      <Background />

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-md border border-primary/20">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-bold">{selectedService.title}</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-foreground/80">{selectedService.longDescription}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="rounded-lg overflow-hidden mb-6">
                    <img
                      src={selectedService.image || "/placeholder.svg"}
                      alt={selectedService.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-primary/10">
                    <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
                    <p className="text-foreground/80 mb-4">
                      Contact us today to discuss your project and how we can help you achieve your goals.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                      <Link href="https://wa.me/0623474720">
                        Contact via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Hero Section */}
      <section id="home" className="content min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <motion.div className="container mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ride the <span className="gradient-text">Next Wave</span> of Innovation
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Next Wave is your partner in navigating the digital future, delivering top-tier software and creative
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="https://wa.me/0623474720">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="content py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card group cursor-pointer"
                variants={fadeIn}
                transition={{ delay: service.delay }}
                onClick={() => setSelectedService(service)}
              >
                <div className="mb-4 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative bg-background rounded-full p-4 w-fit">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-foreground/80">{service.description}</p>
                <div className="mt-4 flex items-center text-primary font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="content py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Next Wave</h2>
              <p className="text-lg mb-6 text-foreground/80">
                Next Wave is your partner in navigating the digital future, delivering top-tier software and creative
                solutions.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                We combine cutting-edge technology with creative expertise to help businesses of all sizes establish a
                strong digital presence.
              </p>
              <Button asChild variant="outline" className="border-primary/50">
                <Link href="#services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <img src="/images/setup.jpg" alt="Digital workspace setup" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-background/70 backdrop-blur-sm p-6 rounded-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Our Journey</h3>
                    <div className="space-y-6">
                      {["Founded", "Growth", "Innovation", "Today"].map((stage, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-primary"></div>
                          <div className="h-0.5 w-12 bg-primary"></div>
                          <div className="bg-background/20 backdrop-blur-sm p-3 rounded-lg flex-1">
                            <h4 className="font-bold">{stage}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="content py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div key={index} className="portfolio-item group" variants={fadeIn}>
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-medium">{item.category}</span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="content py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg mb-8 text-foreground/80">
                Ready to start your digital journey? Contact us today to discuss your project.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Email", value: "info@nextwave.com" },
                  { title: "WhatsApp", value: "0623474720" },
                  { title: "Location", value: "Arusha, Tanzania" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"></div>
                    <div>
                      <h3 className="font-bold">{contact.title}</h3>
                      <p className="text-foreground/80">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                  <Link href="https://wa.me/0623474720">
                    Contact via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background/5 backdrop-blur-sm p-8 rounded-xl border border-primary/10"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your Email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="content py-20 px-4 bg-background/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Follow us on social media to stay updated with the latest trends and our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden"
            >
              <img src="/images/tiktok.jpg" alt="TikTok" className="w-full h-auto object-cover rounded-xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Social Community</h3>
              <p className="text-lg mb-6 text-foreground/80">
                We share valuable insights, tips, and updates about the digital world. Connect with us to stay informed
                and inspired.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 flex flex-col items-center">
                  <img src="/images/fb.jpg" alt="Facebook" className="w-16 h-16 object-cover rounded-full mb-4" />
                  <h4 className="font-bold">Facebook</h4>
                  <p className="text-sm text-center text-foreground/80 mb-4">Follow us for daily updates</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="#">Follow</Link>
                  </Button>
                </div>

                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 flex flex-col items-center">
                  <img src="/images/tiktok.jpg" alt="TikTok" className="w-16 h-16 object-cover rounded-full mb-4" />
                  <h4 className="font-bold">TikTok</h4>
                  <p className="text-sm text-center text-foreground/80 mb-4">Watch our creative content</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="#">Follow</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="content py-12 px-4 border-t border-primary/10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Next Wave</h3>
          <p className="text-foreground/80 mb-6 max-w-md mx-auto">
            Ride the Next Wave of Innovation with our comprehensive digital solutions.
          </p>
          <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Next Wave. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}


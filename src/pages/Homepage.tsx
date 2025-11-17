import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ShoppingCart, Package, TrendingUp, Shield, Zap, Users, ArrowRight } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">PebbleX</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition">
                How It Works
              </a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">
                About
              </a>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Your Trusted Hardware Trading Platform
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                The Platform Connecting Hardware Trade Worldwide
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're the middleman you can trust. PebbleX connects vendors, suppliers, buyers, and
                distributors in one secure online platform. We don't sell products—we make your
                trading easier, faster, and safer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Join Platform <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Browse Products
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-gray-600">Platform Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">50K+</p>
                  <p className="text-gray-600">Products Listed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">98%</p>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Hardware products"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monthly Growth</p>
                    <p className="text-2xl font-bold text-gray-900">+24%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PebbleX?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The trusted platform that makes hardware trading work seamlessly for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Package className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connecting All Parties</h3>
              <p className="text-gray-600">
                We connect vendors, suppliers, buyers, and middlemen in one platform—enabling smooth
                transactions for everyone.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Transactions</h3>
              <p className="text-gray-600">
                Trade with confidence using our secure payment system and buyer protection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Processing</h3>
              <p className="text-gray-600">
                Quick order processing and instant notifications keep your business moving.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-linear-to-br from-orange-50 to-red-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Users</h3>
              <p className="text-gray-600">
                All parties—vendors, suppliers, buyers, and distributors—are verified to ensure safe
                trading.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-linear-to-br from-cyan-50 to-blue-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Facilitation</h3>
              <p className="text-gray-600">
                We facilitate transactions between all parties—making buying, selling, and
                distribution effortless.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Analytics</h3>
              <p className="text-gray-600">
                Track your sales, monitor trends, and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PebbleX Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our platform as a vendor, supplier, buyer, or distributor in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Create Your Account</h3>
                <p className="text-gray-600">
                  Sign up as a vendor, supplier, buyer, or distributor. Complete your profile and
                  get verified.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-indigo-300" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Browse or List Products</h3>
                <p className="text-gray-600">
                  Sellers: List your products. Buyers: Browse the catalog. Our platform connects you
                  seamlessly.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-indigo-300" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trade with Confidence</h3>
              <p className="text-gray-600">
                We facilitate secure transactions, order tracking, and communication—making trade
                hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Platform?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of vendors, suppliers, buyers, and distributors already trading on
            PebbleX
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Selling Today
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-indigo-600"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">PebbleX</h3>
              <p className="text-sm">
                The trusted online platform connecting hardware vendors, suppliers, buyers, and
                distributors worldwide. We're the middleman that makes trading work.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Vendors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Buyers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 PebbleX. All rights reserved. Built with ❤️ by the PebbleX Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

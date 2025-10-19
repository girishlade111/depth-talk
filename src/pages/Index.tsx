import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, MessageSquare, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent mb-6 shadow-2xl">
            <Brain className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              DeepResearch AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your intelligent research companion powered by Perplexity AI. Get thoroughly researched answers to complex questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-6"
            >
              Sign In
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Deep Research</h3>
              <p className="text-sm text-muted-foreground">
                Get comprehensive answers backed by multiple sources
              </p>
            </div>

            <div className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Chat History</h3>
              <p className="text-sm text-muted-foreground">
                All your conversations saved and searchable
              </p>
            </div>

            <div className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your data is encrypted and protected
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:girish@ladestack.in" className="hover:text-primary transition-colors">
                  girish@ladestack.in
                </a>
                <a href="https://instagram.com/girish_lade_" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @girish_lade_
                </a>
                <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  github.com/girishlade111
                </a>
              </div>
              <p className="text-center">
                Powered by Perplexity AI • Built with Supabase
              </p>
              <p className="text-center">
                © {new Date().getFullYear()} <a href="https://ladestack.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LadeStack</a>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

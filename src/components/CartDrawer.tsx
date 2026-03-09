import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const PRESTASHOP_CHECKOUT_URL = "https://fratellimilano.it/order";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice, totalItems, clearCart } = useCart();

  const handleCheckout = () => {
    // Build query params with cart data for PrestaShop
    const cartData = items.map((i) => `${i.id}:${i.quantity}`).join(",");
    const url = `${PRESTASHOP_CHECKOUT_URL}?cart=${encodeURIComponent(cartData)}`;
    window.open(url, "_blank");
  };

  const formatPrice = (price: number) =>
    price.toFixed(2).replace(".", ",") + " €";

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-card border-l border-border/30 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/20">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-primary" />
                <h2 className="font-display text-xl font-light">
                  Carrello
                  {totalItems > 0 && (
                    <span className="text-muted-foreground text-sm ml-2">({totalItems})</span>
                  )}
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-foreground/50 hover:text-foreground transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground font-body text-sm">Il tuo carrello è vuoto</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4"
                    >
                      <div className="w-16 h-16 flex-shrink-0 bg-secondary/50 rounded flex items-center justify-center overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-light truncate">{item.name}</h3>
                        <p className="text-muted-foreground text-xs tracking-wider font-body uppercase">{item.origin}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center border border-border/40 text-foreground/60 hover:border-primary hover:text-primary transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center border border-border/40 text-foreground/60 hover:border-primary hover:text-primary transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-primary font-display text-base">{formatPrice(item.price * item.quantity)}</span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-foreground/30 hover:text-destructive transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border/20 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-body text-sm uppercase tracking-wider">Totale</span>
                  <span className="text-primary font-display text-2xl">{formatPrice(totalPrice)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-gold-gradient text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                >
                  Procedi al Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-muted-foreground font-body text-xs tracking-wider hover:text-foreground transition-colors uppercase"
                >
                  Svuota carrello
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

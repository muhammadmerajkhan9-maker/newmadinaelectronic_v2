import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { business } from "@/lib/business";

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    formatPKR,
    clearCart,
  } = useStore();

  const [checkoutMode, setCheckoutMode] = useState<"review" | "form" | "success">("review");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "Karachi",
    address: "",
    deliveryOption: "standard_cod",
    notes: "",
  });

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 25000;
  const isFreeDelivery = cartSubtotal >= freeDeliveryThreshold;
  const deliveryCharge = isFreeDelivery ? 0 : 500;
  const grandTotal = cartSubtotal + (cart.length > 0 ? deliveryCharge : 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.product.name} (${item.product.reference || item.product.model}) x ${item.quantity} = ${formatPKR(
            item.product.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `*NEW ORDER - NEW MADINA ELECTRONIC KARACHI*\n\n${itemsList}\n\n*Subtotal:* ${formatPKR(
      cartSubtotal
    )}\n*Delivery:* ${isFreeDelivery ? "FREE" : formatPKR(deliveryCharge)}\n*Total Payable:* ${formatPKR(
      grandTotal
    )}\n\n*Customer Details:*\nName: ${formData.fullName || "Pending"}\nPhone: ${
      formData.phone || "Pending"
    }\nCity: ${formData.city}\nAddress: ${formData.address || "Counter pickup or Delivery"}\n\nPlease confirm availability and dispatch!`;

    window.open(`https://wa.me/923213979883?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSubmitCod = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) return;
    setCheckoutMode("success");
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
                New Madina Electronic
              </p>
              <h2 className="text-lg font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal">
                Curated Selection ({cart.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutMode("review");
              }}
              className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free delivery bar */}
          <div className="bg-neutral-950 text-white px-6 py-2.5 text-xs flex items-center justify-between">
            <span>
              {isFreeDelivery
                ? "✓ Complimentary Express Insured Delivery Qualified"
                : `Add ${formatPKR(freeDeliveryThreshold - cartSubtotal)} more for Free Shipping`}
            </span>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutMode === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading-luxury uppercase tracking-wide">
                  Order Successfully Placed
                </h3>
                <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                  Thank you for placing your order with New Madina Electronic. Our Saddar Karachi counter desk will call or WhatsApp you shortly at <span className="font-semibold">{formData.phone}</span> to verify dispatch.
                </p>
                <div className="p-4 bg-neutral-50 border border-neutral-200 text-left text-xs space-y-1">
                  <p><span className="text-neutral-500">Recipient:</span> {formData.fullName}</p>
                  <p><span className="text-neutral-500">Destination:</span> {formData.city}</p>
                  <p><span className="text-neutral-500">Payment:</span> Cash on Delivery (COD)</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCheckoutMode("review");
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800"
                >
                  Continue Exploring
                </button>
              </div>
            ) : checkoutMode === "form" ? (
              <form onSubmit={handleSubmitCod} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                    Express Cash on Delivery
                  </h3>
                  <button
                    type="button"
                    onClick={() => setCheckoutMode("review")}
                    className="text-xs text-neutral-500 hover:text-neutral-900 underline"
                  >
                    Back to Items
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full p-2.5 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0321-xxxxxxx"
                    className="w-full p-2.5 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950 bg-white"
                  >
                    <option value="Karachi">Karachi (Same/Next Day Rider)</option>
                    <option value="Lahore">Lahore (2-3 Days Courier)</option>
                    <option value="Islamabad">Islamabad (2-3 Days Courier)</option>
                    <option value="Rawalpindi">Rawalpindi (2-3 Days Courier)</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Other Pakistan City">Other City in Pakistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                    Complete Street Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Apartment #, Street, Area / Sector"
                    className="w-full p-2.5 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <div className="pt-2">
                  <div className="bg-neutral-50 p-3 border border-neutral-200 text-xs space-y-1 mb-4">
                    <div className="flex justify-between text-neutral-600">
                      <span>Timepiece Subtotal:</span>
                      <span>{formatPKR(cartSubtotal)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Insured Delivery:</span>
                      <span>{isFreeDelivery ? "FREE" : formatPKR(deliveryCharge)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-neutral-950 pt-1 border-t border-neutral-200">
                      <span>Total Payable at Doorstep:</span>
                      <span>{formatPKR(grandTotal)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Confirm Cash on Delivery Order
                  </button>
                </div>
              </form>
            ) : cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center mx-auto text-neutral-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800">
                  Your Curation Bag is Empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Explore Karachi's authentic Casio horology catalog and discover references just landed in Saddar.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-6 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  Browse Timepieces
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-4 pb-6 border-b border-neutral-200 group">
                    <div className="w-20 h-24 bg-neutral-100 shrink-0 overflow-hidden relative border border-neutral-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-500">
                              {product.reference || product.model}
                            </span>
                            <h4 className="text-xs font-semibold text-neutral-900 leading-snug">
                              {product.name}
                            </h4>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs font-medium text-neutral-950 mt-1 font-serif-luxury text-sm">
                          {formatPKR(product.price)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-neutral-200">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-1 px-2 text-neutral-600 hover:bg-neutral-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium text-neutral-900">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-1 px-2 text-neutral-600 hover:bg-neutral-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-semibold text-neutral-900">
                          {formatPKR(product.price * quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && checkoutMode === "review" && (
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>{formatPKR(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Insured Delivery</span>
                  <span>{isFreeDelivery ? "FREE" : formatPKR(deliveryCharge)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-neutral-950 pt-2 border-t border-neutral-200 font-serif-luxury">
                  <span>Estimated Total</span>
                  <span className="text-base">{formatPKR(grandTotal)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCheckoutMode("form")}
                  className="w-full py-3.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-2.5 border border-emerald-700 text-emerald-800 text-xs uppercase tracking-widest font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Instant WhatsApp Order Desk
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                <span>100% Genuine Guaranteed · Counter Inspection Saddar Karachi</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

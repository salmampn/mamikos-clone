export function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCompactRupiah(amount: number) {
  if (amount >= 1_000_000) {
    const millionAmount = amount / 1_000_000;

    return `Rp${millionAmount.toLocaleString("id-ID", {
      maximumFractionDigits: 1,
    })}jt`;
  }

  if (amount >= 1_000) {
    const thousandAmount = amount / 1_000;

    return `Rp${thousandAmount.toLocaleString("id-ID", {
      maximumFractionDigits: 0,
    })}rb`;
  }

  return formatRupiah(amount);
}
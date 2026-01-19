let requestCount = 0;
let lastResetTime = Date.now();

const rateLimiterMiddleware = (req, res, next) => {
  const currentTime = Date.now();

  // Reset counter after 1 minute
  if (currentTime - lastResetTime > 60000) {
    requestCount = 0;
    lastResetTime = currentTime;
  }

  if (requestCount >= 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestCount++;
  next();
};

module.exports = rateLimiterMiddleware;

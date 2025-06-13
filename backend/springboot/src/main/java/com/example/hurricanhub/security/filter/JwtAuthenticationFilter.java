package com.example.hurricanhub.security.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        try {
            String authHeader = request.getHeader("Authorization");
            
            // Skip authentication for certain paths
            if (shouldSkipAuthentication(request)) {
                filterChain.doFilter(request, response);
                return;
            }

            // JWT validation logic would go here
            // For now, just logging the auth header
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                String jwt = authHeader.substring(7);
                logger.info("JWT token received: {}", jwt.substring(0, Math.min(10, jwt.length())) + "...");
                
                // In a real implementation, you would:
                // 1. Validate the JWT
                // 2. Extract user details
                // 3. Set authentication in SecurityContext
            } else {
                logger.warn("No JWT token found in request headers");
            }
            
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            logger.error("Authentication error: {}", e.getMessage());
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
    }
    
    private boolean shouldSkipAuthentication(HttpServletRequest request) {
        String path = request.getRequestURI();
        return path.contains("/public/") || 
               path.contains("/auth/login") || 
               path.contains("/auth/register");
    }
}
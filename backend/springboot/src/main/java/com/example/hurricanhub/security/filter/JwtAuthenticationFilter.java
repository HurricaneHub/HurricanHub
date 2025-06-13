package com.example.hurricanhub.security.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

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
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                String jwt = authHeader.substring(7);
                logger.info("JWT token received: {}", jwt.substring(0, Math.min(10, jwt.length())) + "...");
                
                // In a real implementation, you would validate the JWT and extract user details
                // For now, we'll create a simple authentication to make Spring Security happy
                if (jwt.length() > 0) {
                    // Create authentication object with a dummy user and ROLE_USER authority
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        "user", null, Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
                    );
                    
                    // Set the authentication in the context
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            } else {
                logger.warn("No JWT token found in request headers");
            }
            
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            logger.error("Authentication error: {}", e.getMessage());
            SecurityContextHolder.clearContext();
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
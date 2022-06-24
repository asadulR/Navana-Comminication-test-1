import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        
        return (
            <div>
            <Link
                style={{ color: match ? "#E0E0E0" : "#606060", backgroundColor: match? "#606060" : "#E0E0E0"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
            </div>
        );
    }
          
export default CustomLink;